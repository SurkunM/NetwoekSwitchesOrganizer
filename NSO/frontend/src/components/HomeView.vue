<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-h4 mb-4">Медицинский городок</h1>

                <v-card>
                    <v-card-text>
                        <img src="/images/medcampus-map.png"
                             alt="Карта медицинского городка"
                             style="max-width: 100%; height: auto; border-radius: 8px;">

                        <!-- Текст под картинкой -->
                        <p class="text-caption text-grey mt-2">
                            Схема расположения корпусов
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'CampusMapView'
    }
</script>