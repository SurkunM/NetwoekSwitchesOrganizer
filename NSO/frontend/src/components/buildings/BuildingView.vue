<!-- components/buildings/BuildingView.vue -->
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center mb-2">{{ building.title }}</h1>
                <p class="text-center text-grey mb-4">{{ building.address }}</p>

                <v-card>
                    <v-card-title class="text-center">
                        Выберите этаж
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col v-for="floor in building.floors"
                                   :key="floor.id"
                                   cols="12"
                                   sm="6"
                                   md="4"
                                   lg="3">
                                <v-btn :to="`/building/${buildingId}/floor/${floor.number}`"
                                       color="primary"
                                       size="x-large"
                                       block
                                       class="floor-btn"
                                       :loading="loadingFloor === floor.number"
                                       @click="navigateToFloor(floor.number)">
                                    {{ floor.number }} этаж
                                    <v-badge v-if="floor.rooms.length"
                                             :content="floor.rooms.length"
                                             color="info"
                                             inline
                                             class="ml-2" />
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { useBuildingsStore } from '@/stores/app.js'

    export default {
        props: {
            buildingId: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                loadingFloor: null
            }
        },
        computed: {
            building() {
                const store = useBuildingsStore()
                return store.getBuildingById(this.buildingId)
            }
        },
        methods: {
            navigateToFloor(floorNumber) {
                this.loadingFloor = floorNumber
                // Можно добавить предзагрузку данных для этажа
                setTimeout(() => {
                    this.loadingFloor = null
                }, 500)
            }
        },
        // Реагируем на изменение buildingId
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
    .floor-btn {
        height: 80px;
        font-size: 1.2rem;
        position: relative;
    }
</style>