<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="mb-6">
                    <h1 class="text-h4">{{ building?.address }}</h1>
                    <div class="d-flex align-center mb-2">
                        <v-btn icon="mdi-arrow-left"
                               variant="text"
                               size="x-large"
                               :to="`/building/${building.id}`">
                        </v-btn>
                        <h2 class="text-h5 text-grey ml-2">{{ floorNumber }} этаж</h2>
                    </div>
                </div>

                <v-card v-if="cabinets.length > 0">
                    <v-card-title class="d-flex align-center">
                        <v-icon start color="primary">mdi-server-network</v-icon>
                        Коммутационные шкафы этажа
                        <v-spacer></v-spacer>
                        <v-chip color="primary" variant="outlined">
                            Всего: {{ cabinets.length }}
                        </v-chip>
                    </v-card-title>

                    <v-table hover>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Расположение</th>
                                <th>Устройства</th>
                                <th>Подробнее</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cabinet in cabinets"
                                :key="cabinet.id"
                                class="cabinet-row"
                                @click="$router.push(`/building/${buildingId}/floor/${floorNumber}/cabinet/${cabinet.id}`)">
                                <td>
                                    <div class="d-flex align-center">
                                        <v-icon color="primary" class="mr-2">mdi-server</v-icon>
                                        <span class="font-weight-medium">{{ cabinet.name }}</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-center">
                                        <v-icon size="small" class="mr-1 text-grey">mdi-map-marker</v-icon>
                                        <span class="text-body-2">{{ cabinet.location }}</span>
                                    </div>
                                </td>
                                <td>
                                    <v-chip v-if="cabinet.devices?.length"
                                            color="info"
                                            size="small"
                                            variant="tonal">
                                        {{ cabinet.devices.length }} {{ getDeviceWord(cabinet.devices.length) }}
                                    </v-chip>
                                    <span v-else class="text-grey">Нет устройств</span>
                                </td>
                                <td>
                                    <v-btn color="primary"
                                           variant="tonal"
                                           :to="`/building/${buildingId}/floor/${floorNumber}/cabinet/${cabinet.id}`"
                                           @click.stop>
                                        <v-icon start>mdi-open-in-new</v-icon>
                                        Открыть
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>

                <v-alert v-else
                         type="info"
                         variant="tonal"
                         class="mt-4">
                    На этом этаже нет коммутационных шкафов
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { useBuildingsStore } from "@/stores/store.js"

    export default {
        props: {
            buildingId: {
                type: String,
                required: true
            },
            floorId: {
                type: String,
                required: true
            }
        },

        created() {
            const store = useBuildingsStore();
            store.loadCabinets();
        },

        computed: {
            building() {
                const store = useBuildingsStore();
                return store.getBuildingById(this.buildingId);
            },

            floorNumber() {
                return this.floorId;
            },

            cabinets() {
                const store = useBuildingsStore();
                return store.getCabinetsByFloor(this.buildingId, this.floorId);
            }
        },

        methods: {
            getDeviceWord(count) {
                if (count === 1) return "устройство"
                if (count >= 2 && count <= 4) return "устройства"
                return "устройств"
            }
        },

        watch: {
            buildingId: {
                handler(newId) {
                    const store = useBuildingsStore()
                    const building = store.getBuildingById(newId)
                    if (!building) {
                        this.$router.push('/')
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>
    .cabinet-row {
        cursor: pointer;
        transition: background-color 0.2s;
    }

        .cabinet-row:hover {
            background-color: #f5f5f5;
        }
</style>