buildings: [
    {
        id: 1,
        title: "Хирургический корпус",
        address: "ул. Коммунистическая, 140",
        floors: [
            { id: 1, number: 1 },
            { id: 2, number: 2 },
            { id: 3, number: 3 },
            { id: 4, number: 4 },
            { id: 5, number: 5 },
            { id: 6, number: 6 },
            { id: 7, number: 7 }
        ]
    },
    {
        id: 2,
        title: "Администрация",
        address: "ул. Коммунистическая, 130/А",
        floors: [
            { id: 1, number: 1 },
            { id: 2, number: 2 }
        ]
    },
    {
        id: 3,
        title: "Терапевтический корпус",
        address: "ул. Коммунистическая, 130",
        floors: [
            { id: 1, number: 1 },
            { id: 2, number: 2 },
            { id: 3, number: 3 }
        ]
    },
    {
        id: 4,
        title: "Приемный покой (модуль)",
        address: "ул. Коммунистическая (модуль)",
        floors: [
            { id: 1, number: 1 }
        ]
    }
],

    "cabinets": [
        {
            "id": 21,
            "buildingId": 2,
            "floor": 1,
            "name": "Шкаф СК-1",
            "location": "Пост охраны",
            "status": "active",
            "devices": [
                {
                    "id": 31,
                    "type": "Коммутатор",
                    "model": "Cisco 2960",
                    "ip": "192.168.1.1",
                    "mac": "00:1A:2B:3C:4D:5E",
                    "serial": "FOC1234ABCD",
                    "firmware": "15.2(2)E7",
                    "status": "online",
                    "installDate": "2023-01-15",
                    "lastUpdate": "2024-03-20",
                    "notes": "Основной коммутатор доступа"
                }
            ]
        }
    ]