// stores/cabinets.js
import { defineStore } from "pinia"

export const useCabinetsStore = defineStore("cabinets", {
    state: () => ({
        cabinets: {
            // communist_140, 1 этаж
            "communist_140_1": [
                {
                    id: "cab_140_1_1",
                    name: "Шкаф СК-1",
                    location: "Пост охраны",
                    status: "active",
                    x: 30,
                    y: 50,
                    devices: [
                        { id: 1, type: "Коммутатор", model: "Cisco 2960", ip: "192.168.1.1" },
                        { id: 2, type: "Роутер", model: "MikroTik RB4011", ip: "192.168.1.2" },
                        { id: 3, type: "Патч-панель", model: "48 портов", ip: "-" }
                    ]
                },
                {
                    id: "cab_140_1_2",
                    name: "Шкаф СК-2",
                    location: "Коридор рядом с каб. 201",
                    status: "active",
                    x: 70,
                    y: 60,
                    devices: [
                        { id: 4, type: "Коммутатор", model: "D-Link DGS-1210", ip: "192.168.1.10" }
                    ]
                }
            ],
            // communist_140, 2 этаж
            "communist_140_2": [
                {
                    id: "cab_140_2_1",
                    name: "Шкаф СК-3",
                    location: "Серверная",
                    status: "maintenance",
                    x: 50,
                    y: 40,
                    devices: [
                        { id: 5, type: "Сервер", model: "HP ProLiant", ip: "192.168.2.1" },
                        { id: 6, type: "Коммутатор", model: "Cisco 3750", ip: "192.168.2.2" },
                        { id: 7, type: "ИБП", model: "APC Smart-UPS", ip: "192.168.2.3" },
                        { id: 8, type: "Маршрутизатор", model: "Juniper SRX300", ip: "192.168.2.4" }
                    ]
                }
            ],
            // communist_130, 1 этаж
            "communist_130_1": [
                {
                    id: "cab_130_1_1",
                    name: "Шкаф ТК-1",
                    location: "Служебное помещение",
                    status: "active",
                    x: 25,
                    y: 30,
                    devices: [
                        { id: 9, type: "Коммутатор", model: "TP-Link TL-SG3428", ip: "192.168.10.1" }
                    ]
                }
            ]
        }
    }),

    getters: {
        getCabinetsByFloor: (state) => (buildingId, floorId) => {
            const key = `${buildingId}_${floorId}`
            return state.cabinets[key] || []
        },

        getCabinetById: (state) => (cabinetId) => {
            for (const floorCabinets of Object.values(state.cabinets)) {
                const cabinet = floorCabinets.find(c => c.id === cabinetId)
                if (cabinet) return cabinet
            }
            return null
        }
    },

    actions: {
        async fetchCabinets() {
            // Здесь будет API запрос
        }
    }
})