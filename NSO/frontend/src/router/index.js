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
            path: "/:buildingId",
            name: "building",
            component: () => import("../components/buildings/BuildingView.vue"),
            props: true
        },
        {
            path: "/building/:buildingId/floor/:floorId",
            name: "floor",
            component: () => import("../components/floors/FloorView.vue"),
            props: true
        },
        {
            path: "/building/:buildingId/floor/:floorId/cabinet/:cabinetId",
            name: "cabinet",
            component: () => import("../components/cabinets/CabinetView.vue"), // Следующий этап
            props: true
        }
    ]
});

export default router;