import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/communist_140",
            name: "communist_140",
            component: () => import("../components/buildings/communist_140.vue")
        },
        {
            path: "/communist_130_admin",
            name: "communist_130_admin",
            component: () => import("../components/buildings/communist_130_admin.vue")
        },
        {
            path: "/communist_130",
            name: "communist_130",
            component: () => import("../components/buildings/communist_130.vue")
        },
        {
            path: "/communist_modul",
            name: "communist_modul",
            component: () => import("../components/buildings/communist_modul.vue")
        },
        {
            path: "/communist_124_1",
            name: "communist_124_1",
            component: () => import("../components/buildings/communist_124_1.vue")
        },
        {
            path: "/communist_124",
            name: "communist_124",
            component: () => import("../components/buildings/communist_124.vue")
        },
        {
            path: "/communist_122",
            name: "communist_122",
            component: () => import("../components/buildings/communist_122.vue")
        },
        {
            path: "/communist_120_2",
            name: "communist_120_2",
            component: () => import("../components/buildings/communist_120_2.vue")
        },
        {
            path: "/communist_120_1",
            name: "communist_120_1",
            component: () => import("../components/buildings/communist_120_1.vue")
        },
        {
            path: "/choros_gurkina_6",
            name: "choros_gurkina_6",
            component: () => import("../components/buildings/choros_gurkina_6.vue")
        },
        {
            path: "/building/:buildingId/floor/:floorId",
            name: "floor",
            component: () => import("../components/floors/FloorView.vue"),
            props: true
        },
        {
            path: "/building/:buildingId/floor/:floorId/room/:roomNumber",
            name: "room",
            component: () => import("../components/rooms/RoomView.vue"),
            props: true 
        },
    ]
});

export default router;