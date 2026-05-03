<template>
    <v-app>
        <v-app-bar color="grey">
            <v-app-bar-nav-icon @click="isShow = !isShow" size="x-large"></v-app-bar-nav-icon>
            <template v-slot:append>
                <v-btn icon="mdi-home" to="/"></v-btn>
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="isShow"
                             floating
                             color="grey-darken-3"
                             :width="350">
            <v-list>
                <v-list-item prepend-icon="mdi-map"
                             to="/"
                             title="Медицинский городок">
                </v-list-item>

                <v-divider class="my-3" thickness="2"></v-divider>

                <v-list-item v-for="building in buildings"
                             :key="building.id"
                             :prepend-icon="building.icon || 'mdi-domain'"
                             :to="`/building/${building.id}`"
                             :title="building.address">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import { useBuildingsStore } from "./stores/store.js"

    export default {
        data() {
            return {
                isShow: true
            }
        },

        created() {
            const store = useBuildingsStore();
            store.loadBuildings();
        },

        computed: {
            buildings() {
                const store = useBuildingsStore();
                return store.getAllBuildings
            }
        }
    }
</script>