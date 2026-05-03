<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center mb-2">{{ building.title }}</h1>
                <p class="text-center text-grey mb-4">{{ building.address }}</p>

                <v-card>
                    <v-card-text>
                        <div class="building-visualization">
                            <div v-for="floor in sortedFloors"
                                 :key="floor.id"
                                 class="building-floor"
                                 :class="{ 'ground-floor': floor.number === 1 }">
                                <v-btn :to="`/building/${buildingId}/floor/${floor.number}`"
                                       color="primary"
                                       variant="tonal"
                                       block
                                       class="floor-select-btn"
                                       :loading="loadingFloor === floor.number"
                                       @click="navigateToFloor(floor.number)">
                                    <v-icon start>mdi-floor-plan</v-icon>
                                    {{ getFloorLabel(floor.number) }}
                            </v-btn>
                            </div>
                            <div class="building-foundation"></div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { useBuildingsStore } from "@/stores/store.js";

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
            },

            sortedFloors() {
                if (!this.building?.floors) return []
                return [...this.building.floors].sort((a, b) => b.number - a.number)
            }
        },

        methods: {
            navigateToFloor(floorNumber) {
                this.loadingFloor = floorNumber
                setTimeout(() => {
                    this.loadingFloor = null
                }, 500)
            },

            getFloorLabel(floorNumber) {
                if (floorNumber === -1) return 'Цокольный этаж'
                if (floorNumber === 0) return 'Технический этаж'
                if (floorNumber === 1) return '1 этаж'
                return `${floorNumber} этаж`
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
    .building-visualization {
        max-width: 400px;
        margin: 20px auto;
        border: 2px solid #333;
        border-radius: 8px;
        overflow: hidden;
        background: #f5f5f5;
    }

    .building-floor {
        padding: 15px;
        border-bottom: 1px solid #ddd;
        background: white;
        transition: background-color 0.2s;
    }

        .building-floor:hover {
            background: #f0f7ff;
        }

    .ground-floor {
        background: #f9f9f9;
        border-bottom: 2px solid #1976d2;
    }

    .floor-indicator {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .floor-label {
        font-size: 1.1rem;
    }

    .floor-select-btn {
        text-transform: none;
        font-weight: normal;
    }

    .building-foundation {
        height: 20px;
        background: linear-gradient(45deg, #666 25%, #555 25%, #555 50%, #666 50%, #666 75%, #555 75%, #555);
        background-size: 10px 10px;
        border-top: 2px solid #444;
    }
</style>