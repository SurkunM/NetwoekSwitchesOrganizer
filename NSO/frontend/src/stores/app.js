import { defineStore } from "pinia"

export const useBuildingsStore = defineStore("buildings", {
    state: () => ({
        buildings: {
            "home": {
                id: "home",
                title: "home",
                address: "home",
                floors: []
            },
            "communist_140": {
                id: "communist_140",
                title: "Хирургический корпус",
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
                title: "Администрация",
                address: "ул. Коммунистическая, 130/А",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] }
                ]
            },
            "communist_130": {
                id: "communist_130",
                title: "Терапевтический корпус",
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
                title: "Детская районная регистратура",
                address: "ул. Коммунистическая, 124/1",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103] },
                    { id: 2, number: 2, rooms: [201, 202, 203] }
                ]
            },
            "communist_124": {
                id: "communist_124",
                title: "Детская поликлиника",
                address: "ул. Коммунистическая, 124",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] },
                    { id: 3, number: 3, rooms: [301, 302] }
                ]
            },
            "communist_122": {
                id: "communist_122",
                title: "Детская городкая регистратура",
                address: "ул. Коммунистическая, 122",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102, 103] },
                    { id: 2, number: 2, rooms: [201, 202, 203] }
                ]
            },
            "communist_120_2": {
                id: "communist_120_2",
                title: "Клиническая лабаротория",
                address: "ул. Коммунистическая, 120/2",
                floors: [
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] }
                ]
            },
            "communist_120_1": {
                id: "communist_120_1",
                title: "Детский хирргическтй корпус",
                address: "ул. Коммунистическая, 120/1",
                floors: [
                    { id: 0, number: -1, rooms: [101, 102] },
                    { id: 1, number: 1, rooms: [101, 102] },
                    { id: 2, number: 2, rooms: [201, 202] },
                    { id: 3, number: 3, rooms: [201, 202] },
                    { id: 4, number: 4, rooms: [201, 202] }
                ]
            },
            "choros_gurkina_6": {
                id: "choros_gurkina_6",
                title: "Взрослая поликлиника",
                address: "ул. Чорос-Гуркина, 6",
                floors: [
                    { id: 0, number: -1, rooms: [101, 102, 103, 104] },
                    { id: 1, number: 1, rooms: [101, 102, 103, 104] },
                    { id: 2, number: 2, rooms: [201, 202, 203, 204] },
                    { id: 3, number: 3, rooms: [301, 302, 303, 304] },
                    { id: 4, number: 4, rooms: [301, 302, 303, 304] }
                ]
            }
        },

        cabinets: {
            "communist_140_1": [  // communist_140, 1 этаж
                {
                    id: "cab_140_1_1",
                    name: "Шкаф СК-1",
                    location: "Пост охраны",
                    status: "active",
                    devices: [
                        {
                            id: 1,
                            type: "Коммутатор",
                            model: "Cisco 2960",
                            ip: "192.168.1.1",
                            // Дополнительные поля можно добавить здесь
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7"
                        },
                        {
                            id: 2,
                            type: "Роутер",
                            model: "MikroTik RB4011",
                            ip: "192.168.1.2"
                        },
                        {
                            id: 3,
                            type: "Коммутатор",
                            model: "Cisco 22",
                            ip: "192.168.1.1",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 4,
                            type: "Коммутатор",
                            model: "Cisco 333",
                            ip: "192.168.1.1",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 5,
                            type: "Коммутатор",
                            model: "Cisco 111",
                            ip: "192.168.1.1",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 6,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 7,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 8,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 9,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 11,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 16,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 13,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        },
                        {
                            id: 14,
                            type: "Коммутатор",
                            model: "Cisco 2",
                            ip: "192.168.1.11",
                            mac: "00:1A:2B:3C:4D:5E",
                            serial: "FOC1234ABCD",
                            firmware: "15.2(2)E7",
                            status: "online",
                            installDate: "2023-01-15",
                            lastUpdate: "2024-03-20",
                            notes: "Основной коммутатор доступа",
                            ports: {
                                rj45: { total: 24, used: 18 },
                                sfp: { total: 4, used: 2 }
                            }
                        }
                    ]
                },
                {
                    id: "cab_140_1_2",
                    name: "Шкаф СК-2",
                    location: "Коридор рядом с каб. 201",
                    status: "active",
                    devices: [
                        { id: 3, type: "Коммутатор", model: "D-Link DGS-1210", ip: "192.168.1.10" }
                    ]
                }
            ],
            "communist_140_2": [  // communist_140, 2 этаж
                {
                    id: "cab_140_2_1",
                    name: "Шкаф СК-3",
                    location: "Серверная",
                    status: "active",
                    devices: [
                        { id: 4, type: "Сервер", model: "HP ProLiant", ip: "192.168.2.1" },
                        { id: 5, type: "Коммутатор", model: "Cisco 3750", ip: "192.168.2.2" }
                    ]
                },
                {
                    id: "cab_140_2_2",
                    name: "Шкаф СК-2",
                    location: "Коридор рядом с каб. 201",
                    status: "active",
                    devices: [
                        { id: 3, type: "Коммутатор", model: "D-Link DGS-1210", ip: "192.168.1.10" }
                    ]
                },
                {
                    id: "cab_140_2_3",
                    name: "Шкаф СК-2",
                    location: "Коридор рядом с каб. 201",
                    status: "active",
                    devices: [
                        { id: 3, type: "Коммутатор", model: "D-Link DGS-1210", ip: "192.168.1.10" }
                    ]
                }
            ],
            "communist_140_3": [  // communist_140, 2 этаж
                {
                    id: "cab_140_3_1",
                    name: "Шкаф СК-3",
                    location: "Серверная",
                    status: "active",
                    devices: [
                        { id: 4, type: "Сервер", model: "HP ProLiant", ip: "192.168.2.1" },
                        { id: 5, type: "Коммутатор", model: "Cisco 3750", ip: "192.168.2.2" }
                    ]
                }
            ],
            "communist_140_4": [  // communist_140, 2 этаж
                {
                    id: "cab_140_4_1",
                    name: "Шкаф СК-3",
                    location: "Серверная",
                    status: "active",
                    devices: [
                        { id: 4, type: "Сервер", model: "HP ProLiant", ip: "192.168.2.1" },
                        { id: 5, type: "Коммутатор", model: "Cisco 3750", ip: "192.168.2.2" }
                    ]
                }
            ],
            "communist_140_5": [  // communist_140, 2 этаж
                {
                    id: "cab_140_5_1",
                    name: "Шкаф СК-3",
                    location: "Серверная",
                    status: "active",
                    devices: [
                        { id: 4, type: "Сервер", model: "HP ProLiant", ip: "192.168.2.1" },
                        { id: 5, type: "Коммутатор", model: "Cisco 3750", ip: "192.168.2.2" }
                    ]
                }
            ]
        }
    }),

    getters: {
        getBuildingById: (state) => (id) => {
            return state.buildings[id]
        },

        getAllBuildings: (state) => {
            return state.buildings
        },

        // Добавляем геттер для получения шкафов этажа
        getCabinetsByFloor: (state) => (buildingId, floorId) => {
            const key = `${buildingId}_${floorId}`
            return state.cabinets?.[key] || []
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