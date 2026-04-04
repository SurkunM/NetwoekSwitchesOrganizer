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
                                 color="grey-darken-3">
            <v-list>
                <v-list-item prepend-icon="mdi-home"
                             to="/"
                             title="Главная">
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item prepend-icon="mdi-domain"
                             to="communist_140"
                             title="Коммун-й 140">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_130_admin"
                             title="Коммун-й 130/A">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_130"
                             title="Коммун-й 130">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_modul"
                             title="Приемный покой (модуль)">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_124_1"
                             title="Коммун-й 124/1">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_124"
                             title="Коммун-й 124">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_122"
                             title="Коммун-й 122">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_120_2"
                             title="Коммун-й 120/2">
                </v-list-item>
                <v-list-item prepend-icon="mdi-domain"
                             to="communist_120_1"
                             title="Коммун-й 120/1">
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item prepend-icon="mdi-domain"
                             to="choros_gurkina_6"
                             title="Чорос-Гуркина 6">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true
            }
        }
    }
</script>