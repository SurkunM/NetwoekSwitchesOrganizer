<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center mb-4">Коммунистический 120/2</h1>
                <v-card>
                    <v-card-title class="text-center">
                        Выберите этаж
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col v-for="floor in foors"
                                   :key="id"
                                   lg="4">
                                <v-btn :to="`/building/:buildingId/floor/:floorId/room/${floor.number}`"
                                       color="primary"
                                       size="x-large"
                                       block
                                       class="floor-btn">
                                    {{ floor.number }} этаж
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
    export default {
        data() {
            return {
                foors: [
                    { id: 1, number: 1, rooms: 2 },
                    { id: 2, number: 2, rooms: 2 },
                    { id: 3, number: 3, rooms: 2 },
                    { id: 4, number: 4, rooms: 2 }
                ]
            }
        }
    }
</script>

<style scoped>
    .floor-btn {
        height: 80px;
        font-size: 1.2rem;
    }
</style>