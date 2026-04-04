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
                <v-list-item v-for="(building, key) in buildings"
                             :key="key"
                             :prepend-icon="building.icon || 'mdi-domain'"
                             :to="`/${key}`"
                             :title="building.title">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import { useBuildingsStore } from "./stores/app.js"

    export default {
        data() {
            return {
                isShow: true
            }
        },

        computed: {
            buildings() {
                const store = useBuildingsStore()
                return store.getAllBuildings
            }
        }
    }
</script>