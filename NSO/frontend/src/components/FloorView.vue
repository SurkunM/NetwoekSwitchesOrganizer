<template>
    <v-container fluid class="pa-4">
        <!-- Хлебные крошки -->
        <v-breadcrumbs :items="breadcrumbs" class="px-0">
            <template v-slot:title="{ item }">
                <span :class="item.class"
                      :style="item.href ? 'cursor: pointer;' : ''"
                      @click="item.href ? $router.push(item.href) : null">
                    {{ item.title }}
                </span>
            </template>
        </v-breadcrumbs>

        <!-- Контент этажа или комнаты -->
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"
                           v-if="Component"
                           :building-id="buildingId"
                           :floor-id="floorId"
                           :room-number="roomNumber"
                           @back="goBackToFloor" />
            </transition>
        </router-view>

        <!-- Если нет выбранной комнаты, показываем список помещений -->
        <template v-if="!roomNumber">
            <v-card>
                <v-card-title class="d-flex align-center">
                    <v-icon :icon="floorIcon" size="large" class="mr-2"></v-icon>
                    {{ floorTitle }}
                </v-card-title>

                <v-card-text>
                    <!-- Информация о корпусе (как было) -->
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-sheet class="pa-4 rounded bg-grey-lighten-4">
                                <div class="text-subtitle-2 text-grey">Корпус</div>
                                <div class="text-h6">{{ buildingName }}</div>
                            </v-sheet>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-sheet class="pa-4 rounded bg-grey-lighten-4">
                                <div class="text-subtitle-2 text-grey">Этаж</div>
                                <div class="text-h6">{{ floorNumber }}</div>
                            </v-sheet>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-sheet class="pa-4 rounded bg-grey-lighten-4">
                                <div class="text-subtitle-2 text-grey">Всего помещений</div>
                                <div class="text-h6">{{ floorRooms }} шт.</div>
                            </v-sheet>
                        </v-col>
                    </v-row>

                    <!-- Помещения этажа -->
                    <v-divider class="my-4"></v-divider>

                    <h3 class="text-h6 mb-3">Помещения этажа:</h3>

                    <v-row>
                        <v-col v-for="room in floorRoomsArray"
                               :key="room"
                               cols="12"
                               sm="6"
                               md="4"
                               lg="3">
                            <v-card variant="outlined"
                                    class="room-card"
                                    @click="openRoom(room)">
                                <v-card-item>
                                    <template v-slot:prepend>
                                        <v-icon color="primary" icon="mdi-door"></v-icon>
                                    </template>

                                    <v-card-title class="text-h6">
                                        Кабинет {{ room }}
                                    </v-card-title>

                                    <v-card-subtitle>
                                        Помещение №{{ room }}
                                    </v-card-subtitle>
                                </v-card-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-container>
</template>

<script>
    export default {
        name: 'FloorView',
        props: {
            buildingId: {
                type: [String, Number],
                required: true
            },
            floorId: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                buildingsData: {
                    1: {
                        name: 'Корпус А',
                        floors: {
                            1: { number: 1, name: 'Первый этаж', rooms: 12 },
                            2: { number: 2, name: 'Второй этаж', rooms: 15 },
                            3: { number: 3, name: 'Третий этаж', rooms: 10 }
                        }
                    },
                    2: {
                        name: 'Корпус Б',
                        floors: {
                            1: { number: 1, name: 'Первый этаж', rooms: 8 },
                            2: { number: 2, name: 'Второй этаж', rooms: 12 },
                            3: { number: 3, name: 'Третий этаж', rooms: 14 },
                            4: { number: 4, name: 'Четвертый этаж', rooms: 10 },
                            5: { number: 5, name: 'Пятый этаж', rooms: 6 }
                        }
                    },
                    3: {
                        name: 'Корпус В',
                        floors: {
                            1: { number: 1, name: 'Первый этаж', rooms: 20 },
                            2: { number: 2, name: 'Второй этаж', rooms: 18 }
                        }
                    }
                }
            }
        },
        computed: {
            roomNumber() {
                return this.$route.params.roomNumber;
            },
            buildingName() {
                return this.buildingsData[this.buildingId]?.name || 'Неизвестный корпус';
            },
            currentFloor() {
                return this.buildingsData[this.buildingId]?.floors[this.floorId];
            },
            floorNumber() {
                return this.currentFloor?.number || this.floorId;
            },
            floorRooms() {
                return this.currentFloor?.rooms || 0;
            },
            floorRoomsArray() {
                return Array.from({ length: this.floorRooms }, (_, i) => {
                    return `${this.buildingId}${this.floorId}${i + 1}`;
                });
            },
            floorIcon() {
                return `mdi-numeric-${this.floorNumber}-circle`;
            },
            floorTitle() {
                return `${this.buildingName}, ${this.currentFloor?.name || `Этаж ${this.floorNumber}`}`;
            },
            breadcrumbs() {
                const items = [
                    { title: 'Корпуса', class: 'text-grey', disabled: true },
                    { title: this.buildingName, class: 'text-grey', disabled: false, href: `/building/${this.buildingId}/floor/${this.floorId}` },
                    { title: this.currentFloor?.name || `Этаж ${this.floorNumber}`, class: 'text-grey', disabled: false, href: `/building/${this.buildingId}/floor/${this.floorId}` }
                ];

                if (this.roomNumber) {
                    items.push({
                        title: `Кабинет ${this.roomNumber}`,
                        class: 'font-weight-bold',
                        disabled: true
                    });
                }

                return items;
            }
        },
        methods: {
            openRoom(roomNumber) {
                this.$router.push(`/building/${this.buildingId}/floor/${this.floorId}/room/${roomNumber}`);
            },
            goBackToFloor() {
                this.$router.push(`/building/${this.buildingId}/floor/${this.floorId}`);
            }
        }
    }
</script>