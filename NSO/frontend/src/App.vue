<!-- App.vue -->
<template>
    <v-responsive class="border rounded" height="100vh">
        <v-app>
            <v-app-bar title="Управление зданиями">
                <template v-slot:append>
                    <v-btn icon="mdi-home" to="/"></v-btn>
                </template>
            </v-app-bar>

            <v-navigation-drawer>
                <!-- Корпуса (всегда видны) -->
                <v-list>
                    <v-list-subheader>Корпуса</v-list-subheader>

                    <v-list-item v-for="building in buildings"
                                 :key="building.id"
                                 :title="building.name"
                                 :prepend-icon="building.icon"
                                 :active="selectedBuilding?.id === building.id"
                                 @click="selectBuilding(building)">
                        <template v-slot:append>
                            <v-icon v-if="selectedBuilding?.id === building.id"
                                    icon="mdi-chevron-right"
                                    color="primary"></v-icon>
                        </template>
                    </v-list-item>
                </v-list>

                <!-- Этажи (появляются при выборе корпуса) -->
                <v-divider class="my-2"></v-divider>

                <v-list v-if="selectedBuilding">
                    <v-list-subheader>
                        Этажи корпуса {{ selectedBuilding.name }}
                    </v-list-subheader>

                    <v-list-item v-for="floor in selectedBuilding.floors"
                                 :key="floor.id"
                                 :title="floor.name"
                                 :prepend-icon="floor.icon"
                                 :active="selectedFloor === floor.id && !selectedRoom"
                                 :to="`/building/${selectedBuilding.id}/floor/${floor.id}`">
                        <template v-slot:append>
                            <v-chip size="small" color="primary" variant="tonal">
                                {{ floor.rooms || 0 }} помещений
                            </v-chip>
                        </template>
                    </v-list-item>
                </v-list>

                <!-- Сообщение если корпус не выбран -->
                <v-card v-else class="ma-4" variant="tonal">
                    <v-card-text class="text-center text-grey">
                        <v-icon icon="mdi-domain" size="x-large" class="mb-2"></v-icon>
                        <div>Выберите корпус</div>
                    </v-card-text>
                </v-card>
            </v-navigation-drawer>

            <v-main>
                <router-view />
            </v-main>
        </v-app>
    </v-responsive>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                buildings: [
                    {
                        id: 1,
                        name: 'Корпус А',
                        icon: 'mdi-domain',
                        floors: [
                            { id: 1, name: '1 этаж', icon: 'mdi-numeric-1-circle', rooms: 12 },
                            { id: 2, name: '2 этаж', icon: 'mdi-numeric-2-circle', rooms: 15 },
                            { id: 3, name: '3 этаж', icon: 'mdi-numeric-3-circle', rooms: 10 }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Корпус Б',
                        icon: 'mdi-domain',
                        floors: [
                            { id: 1, name: '1 этаж', icon: 'mdi-numeric-1-circle', rooms: 8 },
                            { id: 2, name: '2 этаж', icon: 'mdi-numeric-2-circle', rooms: 12 },
                            { id: 3, name: '3 этаж', icon: 'mdi-numeric-3-circle', rooms: 14 },
                            { id: 4, name: '4 этаж', icon: 'mdi-numeric-4-circle', rooms: 10 },
                            { id: 5, name: '5 этаж', icon: 'mdi-numeric-5-circle', rooms: 6 }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Корпус В',
                        icon: 'mdi-domain',
                        floors: [
                            { id: 1, name: '1 этаж', icon: 'mdi-numeric-1-circle', rooms: 20 },
                            { id: 2, name: '2 этаж', icon: 'mdi-numeric-2-circle', rooms: 18 }
                        ]
                    }
                ],
                selectedBuilding: null,
                selectedFloor: null,
                selectedRoom: null
            }
        },
        watch: {
            '$route.params': {
                handler(params) {
                    if (params.buildingId) {
                        const building = this.buildings.find(b => b.id === Number(params.buildingId));
                        if (building) {
                            this.selectedBuilding = building;

                            if (params.floorId) {
                                this.selectedFloor = Number(params.floorId);
                            }

                            if (params.roomNumber) {
                                this.selectedRoom = params.roomNumber;
                            } else {
                                this.selectedRoom = null;
                            }
                        }
                    } else {
                        this.selectedBuilding = null;
                        this.selectedFloor = null;
                        this.selectedRoom = null;
                    }
                },
                immediate: true,
                deep: true
            }
        },
        methods: {
            selectBuilding(building) {
                this.selectedBuilding = building;
                this.selectedFloor = null;
                this.selectedRoom = null;
                if (building.floors.length > 0) {
                    this.$router.push(`/building/${building.id}/floor/${building.floors[0].id}`);
                }
            }
        }
    }
</script>