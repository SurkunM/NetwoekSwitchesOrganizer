// router/index.js
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/building/1/floor/1" // Редирект на первый корпус, первый этаж
        },
        {
            path: "/building/:buildingId/floor/:floorId",
            name: "floor",
            component: () => import("../components/FloorView.vue"),
            props: true,
            children: [
                {
                    path: "room/:roomNumber",
                    component: () => import("../components/RoomView.vue"),
                    props: true,
                    name: "room"
                }
            ]
        }
    ]
});

export default router;