import { defineStore } from "pinia"

export const useBuildingsStore = defineStore("buildings", {
    state: () => ({
        buildings: {
            "communist_140": {
                id: "communist_140",
                title: "Коммунистический 140",
                address: "ул. Коммунистическая, 140",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103, 104] },
                    { id: 2, number: 2, rooms: [201, 202, 203, 204] },
                    { id: 3, number: 3, rooms: [301, 302, 303, 304] },
                    { id: 4, number: 4, rooms: [401, 402, 403, 404] },
                    { id: 5, number: 5, rooms: [501, 502, 503, 504] },
                    { id: 6, number: 6, rooms: [601, 602, 603, 604] },
                    { id: 7, number: 7, rooms: [701, 702, 703, 704] }
                ]
            },
            "communist_130_admin": {
                id: "communist_130_admin",
                title: "Коммунистический 130 (Администрация)",
                address: "ул. Коммунистическая, 130/А",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] }
                ]
            },
            "communist_130": {
                id: "communist_130",
                title: "Коммунистический 130",
                address: "ул. Коммунистическая, 130",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103] },
                    { id: 2, number: 2, rooms: [201, 202, 203] },
                    { id: 3, number: 3, rooms: [301, 302, 303] }
                ]
            },
            "communist_modul": {
                id: "communist_modul",
                title: "Приемный покой (модуль)",
                address: "ул. Коммунистическая (модуль)",
                floors: [
                    { id: 1, number: 1, rooms: [1, 2, 3, 4] }
                ]
            },
            "communist_124_1": {
                id: "communist_124_1",
                title: "Коммунистический 124/1",
                address: "ул. Коммунистическая, 124/1",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103] },
                    { id: 2, number: 2, rooms: [201, 202, 203] }
                ]
            },
            "communist_124": {
                id: "communist_124",
                title: "Коммунистический 124",
                address: "ул. Коммунистическая, 124",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] },
                    { id: 3, number: 3, rooms: [301, 302] }
                ]
            },
            "communist_122": {
                id: "communist_122",
                title: "Коммунистический 122",
                address: "ул. Коммунистическая, 122",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103] },
                    { id: 2, number: 2, rooms: [201, 202, 203] }
                ]
            },
            "communist_120_2": {
                id: "communist_120_2",
                title: "Коммунистический 120/2",
                address: "ул. Коммунистическая, 120/2",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] }
                ]
            },
            "communist_120_1": {
                id: "communist_120_1",
                title: "Коммунистический 120/1",
                address: "ул. Коммунистическая, 120/1",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] }
                ]
            },
            "choros_gurkina_6": {
                id: "choros_gurkina_6",
                title: "Чорос-Гуркина 6",
                address: "ул. Чорос-Гуркина, 6",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103, 104] },
                    { id: 2, number: 2, rooms: [201, 202, 203, 204] },
                    { id: 3, number: 3, rooms: [301, 302, 303, 304] }
                ]
            }
        }
    }),

    getters: {
        getBuildingById: (state) => (id) => {
            return state.buildings[id]
        },

        getAllBuildings: (state) => {
            return state.buildings
        }
    },

    actions: {
        async fetchBuildings() {
            // Здесь будет API запрос
            // const response = await fetch("/api/buildings")
            // this.buildings = await response.json()
        }
    }
})