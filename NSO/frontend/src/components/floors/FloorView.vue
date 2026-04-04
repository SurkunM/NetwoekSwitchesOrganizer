<template>
    <v-container fluid class="fill-height pa-4">
        <v-row class="fill-height">
            <v-col cols="12" class="d-flex flex-column">
                <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                <template v-if="roomNumber">
                    <router-view :building-id="buildingId"
                                 :floor-id="floorId"
                                 :room-number="roomNumber"
                                 @back="goBackToFloor" />
                </template>


                <v-card v-else class="flex-grow-1 d-flex flex-column" style="min-height: 0;">
                    <v-card-title class="d-flex align-center">
                        <v-icon :icon="floorIcon" size="large" class="mr-2"></v-icon>
                        {{ floorTitle }}
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text style="flex: 1; overflow-y: auto; min-height: 0;">
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
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

        computed: {
            roomNumber() {
                return this.$route.params.roomNumber;
            },

            currentBuilding() {
                return this.buildingsData.find(b => b.id == this.buildingId);
            },

            buildingName() {
                return this.currentBuilding?.name || 'Неизвестный корпус';
            },

            currentFloor() {
                if (!this.currentBuilding) return null;
                return this.currentBuilding.floors.find(f => f.id == this.floorId);
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
                const num = parseInt(this.floorNumber);
                return `mdi-numeric-${num}-circle`;
            },

            floorTitle() {
                return `${this.buildingName}, ${this.currentFloor?.name || `Этаж ${this.floorNumber}`}`;
            },

            breadcrumbs() {
                const items = [
                    { title: 'Корпуса', disabled: true },
                    { title: this.buildingName, disabled: false, to: `/building/${this.buildingId}/floor/${this.floorId}` },
                    { title: this.currentFloor?.name || `Этаж ${this.floorNumber}`, disabled: false, to: `/building/${this.buildingId}/floor/${this.floorId}` }
                ];

                if (this.roomNumber) {
                    items.push({
                        title: `Кабинет ${this.roomNumber}`,
                        disabled: true
                    });
                }

                return items;
            }
        },

        data() {
            return {
                buildingsData: [
                    {
                        id: 1,
                        name: 'Корпус А',
                        floors: [
                            { id: 1, number: 1, name: 'Первый этаж', rooms: 12 },
                            { id: 2, number: 2, name: 'Второй этаж', rooms: 15 },
                            { id: 3, number: 3, name: 'Третий этаж', rooms: 10 }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Корпус Б',
                        floors: [
                            { id: 1, number: 1, name: 'Первый этаж', rooms: 8 },
                            { id: 2, number: 2, name: 'Второй этаж', rooms: 12 },
                            { id: 3, number: 3, name: 'Третий этаж', rooms: 14 },
                            { id: 4, number: 4, name: 'Четвертый этаж', rooms: 10 },
                            { id: 5, number: 5, name: 'Пятый этаж', rooms: 6 }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Корпус В',
                        floors: [
                            { id: 1, number: 1, name: 'Первый этаж', rooms: 35 },
                            { id: 2, number: 2, name: 'Второй этаж', rooms: 18 }
                        ]
                    }
                ]
            }
        },

        methods: {
            openRoom(roomNumber) {
                // Передаем все параметры в маршрут комнаты
                this.$router.push({
                    name: 'room',
                    params: {
                        buildingId: this.buildingId,
                        floorId: this.floorId,
                        roomNumber: roomNumber
                    }
                });
            },

            goBackToFloor() {
                this.$router.push(`/building/${this.buildingId}/floor/${this.floorId}`);
            }
        }
    }
</script>

<style scoped>
    .fill-height {
        height: 100%;
    }

    .flex-grow-1 {
        flex-grow: 1;
    }

    .d-flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }
</style>