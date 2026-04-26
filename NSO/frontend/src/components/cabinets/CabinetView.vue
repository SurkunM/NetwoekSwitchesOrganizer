<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-breadcrumbs :items="breadcrumbs" class="px-0">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>

                <v-card class="mb-4">
                    <v-card-item>
                        <template v-slot:prepend>
                            <v-btn icon="mdi-arrow-left"
                                   variant="text"
                                   :to="`/building/${buildingId}/floor/${floorId}`"
                                   class="mr-2">
                            </v-btn>
                        </template>

                        <v-card-title class="d-flex align-center">
                            <v-icon icon="mdi-server" size="large" color="primary" class="mr-2"></v-icon>
                            {{ cabinet?.location || 'Расположение не указано' }}
                        </v-card-title>
                    </v-card-item>
                </v-card>

                <v-card v-if="devices.length > 0">
                    <v-card-text>
                        <v-data-table :headers="headers"
                                      :items="devices"
                                      item-value="id"
                                      hover
                                      show-expand
                                      hide-default-footer
                                      :expanded="expandedItems"
                                      @update:expanded="expandedItems = $event">

                            <!-- Тип устройства с иконкой -->
                            <template v-slot:item.type="{ item }">
                                <div class="d-flex align-center">
                                    <v-icon :icon="getDeviceIcon(item.type)"
                                            :color="getDeviceColor(item.type)"
                                            size="small"
                                            class="mr-2">
                                    </v-icon>
                                    {{ item.type }}
                                </div>
                            </template>

                            <!-- Статус устройства -->
                            <template v-slot:item.status="{ item }">
                                <v-chip :color="item.status === 'online' ? 'success' : 'error'"
                                        size="small"
                                        variant="tonal">
                                    {{ item.status === 'online' ? 'Онлайн' : 'Офлайн' }}
                                </v-chip>
                            </template>

                            <!-- Порты (краткая информация) -->
                            <template v-slot:item.portsInfo="{ item }">
                                <span v-if="item.type === 'Коммутатор'">
                                    {{ getUsedPortsCount(item) }}/{{ getTotalPortsCount(item) }}
                                </span>
                                <span v-else>—</span>
                            </template>

                            <!-- Кастомная кнопка раскрытия -->
                            <template v-slot:item.data-table-expand="{ internalItem, isExpanded, toggleExpand }">
                                <v-btn :append-icon="isExpanded(internalItem) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                       :text="isExpanded(internalItem) ? 'Скрыть' : 'Подробнее'"
                                       class="text-none"
                                       color="primary"
                                       size="small"
                                       variant="text"
                                       @click="toggleExpand(internalItem)">
                                </v-btn>
                            </template>

                            <!-- Раскрытая секция с деталями -->
                            <template v-slot:expanded-row="{ columns, item }">
                                <tr>
                                    <td :colspan="columns.length" class="pa-4">
                                        <v-card variant="flat" border>
                                            <v-card-title class="text-subtitle-1 py-2">
                                                Детальная информация: {{ item.model }}
                                            </v-card-title>

                                            <v-card-text>
                                                <v-row dense>
                                                    <v-col cols="12" md="6">
                                                        <v-list density="compact">
                                                            <v-list-item>
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-ip</v-icon>
                                                                    IP адрес
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.ip }}</v-list-item-subtitle>
                                                            </v-list-item>

                                                            <v-list-item v-if="item.mac">
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-mac</v-icon>
                                                                    MAC адрес
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.mac }}</v-list-item-subtitle>
                                                            </v-list-item>

                                                            <v-list-item v-if="item.manufacturer">
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-factory</v-icon>
                                                                    Производитель
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.manufacturer }}</v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>

                                                    <v-col cols="12" md="6">
                                                        <v-list density="compact">
                                                            <v-list-item v-if="item.installDate">
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                                                                    Дата установки
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.installDate }}</v-list-item-subtitle>
                                                            </v-list-item>

                                                            <v-list-item v-if="item.lastUpdate">
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-update</v-icon>
                                                                    Последнее обновление
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.lastUpdate }}</v-list-item-subtitle>
                                                            </v-list-item>

                                                            <v-list-item v-if="item.notes">
                                                                <v-list-item-title class="font-weight-bold">
                                                                    <v-icon size="small" class="mr-1">mdi-note</v-icon>
                                                                    Примечания
                                                                </v-list-item-title>
                                                                <v-list-item-subtitle>{{ item.notes }}</v-list-item-subtitle>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-col>
                                                </v-row>

                                                <!-- Визуализация портов только для коммутаторов -->
                                                <template v-if="item.type === 'Коммутатор'">
                                                    <v-divider class="my-3"></v-divider>

                                                    <div class="d-flex align-center mb-2">
                                                        <v-icon size="small" class="mr-1">mdi-ethernet</v-icon>
                                                        <span class="text-subtitle-2 font-weight-bold">
                                                            Порты коммутатора ({{ getTotalPortsCount(item) }} всего)
                                                        </span>
                                                        <v-spacer></v-spacer>

                                                        <!-- Легенда -->
                                                        <div class="d-flex align-center gap-3">
                                                            <div class="d-flex align-center">
                                                                <div class="port-legend bg-wan"></div>
                                                                <span class="text-caption ml-1">WAN</span>
                                                            </div>
                                                            <div class="d-flex align-center">
                                                                <div class="port-legend bg-lan"></div>
                                                                <span class="text-caption ml-1">LAN/ЗСПД</span>
                                                            </div>
                                                            <div class="d-flex align-center">
                                                                <div class="port-legend bg-uplink"></div>
                                                                <span class="text-caption ml-1">Uplink</span>
                                                            </div>
                                                            <div class="d-flex align-center">
                                                                <div class="port-legend bg-free"></div>
                                                                <span class="text-caption ml-1">Свободен</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- Сетка портов -->
                                                    <v-card variant="outlined" class="pa-4">
                                                        <div class="ports-grid">
                                                            <div v-for="port in getPortVisualization(item)"
                                                                 :key="port.number"
                                                                 class="port-item"
                                                                 :class="getPortClass(port)"
                                                                 @click="showPortDetails(port)">
                                                                <v-tooltip activator="parent" location="top">
                                                                    <div>
                                                                        <strong>Порт {{ port.number }}</strong><br>
                                                                        Тип: {{ port.label }}<br>
                                                                        Статус: {{ port.used ? 'Используется' : 'Свободен' }}<br>
                                                                        <span v-if="port.device">Устройство: {{ port.device }}</span>
                                                                    </div>
                                                                </v-tooltip>
                                                                <span class="port-number">{{ port.number }}</span>
                                                                <v-icon v-if="port.uplink" size="x-small" class="port-icon">
                                                                    mdi-arrow-up-bold
                                                                </v-icon>
                                                            </div>
                                                        </div>

                                                        <!-- Статистика портов -->
                                                        <v-row class="mt-4">
                                                            <v-col cols="3">
                                                                <v-card variant="tonal" color="success" size="small">
                                                                    <v-card-text class="text-center py-2">
                                                                        <div class="text-caption">WAN</div>
                                                                        <div class="text-h6">
                                                                            {{ getPortStats(item, 'wan').used }}/{{ getPortStats(item, 'wan').total }}
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-card variant="tonal" color="warning" size="small">
                                                                    <v-card-text class="text-center py-2">
                                                                        <div class="text-caption">LAN</div>
                                                                        <div class="text-h6">
                                                                            {{ getPortStats(item, 'lan').used }}/{{ getPortStats(item, 'lan').total }}
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-card variant="tonal" color="error" size="small">
                                                                    <v-card-text class="text-center py-2">
                                                                        <div class="text-caption">Uplink</div>
                                                                        <div class="text-h6">
                                                                            {{ getPortStats(item, 'uplink').used }}/{{ getPortStats(item, 'uplink').total }}
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-card variant="tonal" color="grey" size="small">
                                                                    <v-card-text class="text-center py-2">
                                                                        <div class="text-caption">Свободно</div>
                                                                        <div class="text-h6">{{ getPortStats(item, 'free').total }}</div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card>
                                                </template>
                                            </v-card-text>
                                        </v-card>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>

                <v-alert v-else
                         type="info"
                         variant="tonal"
                         class="mt-4">
                    В этом шкафу нет установленного оборудования
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { useBuildingsStore } from "@/stores/store.js";

    export default {
        name: "CabinetView",

        props: {
            buildingId: {
                type: String,
                required: true
            },
            floorId: {
                type: String,
                required: true
            },
            cabinetId: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                expandedItems: [],
                headers: [
                    { title: "Тип", key: "type", align: "start", width: 150 },
                    { title: "Модель", key: "model", width: 200 },
                    { title: "IP адрес", key: "ip", width: 150 },
                    { title: "Статус", key: "status", width: 120 },
                    { title: "Порты", key: "portsInfo", width: 120 },
                    { title: "", key: "data-table-expand", width: 130, align: "end" }
                ]
            }
        },

        computed: {
            building() {
                const store = useBuildingsStore()
                return store.getBuildingById(this.buildingId)
            },

            cabinet() {
                const store = useBuildingsStore()
                // ИЗМЕНЕНИЕ: используем геттер getCabinetsByFloor
                const cabinets = store.getCabinetsByFloor(this.buildingId, this.floorId)
                return cabinets.find(c => c.id === this.cabinetId)
                // БЫЛО: 
                // const key = `${this.buildingId}_${this.floorId}`
                // const cabinets = store.cabinets?.[key] || []
                // return cabinets.find(c => c.id === this.cabinetId)
            },

            devices() {
                if (!this.cabinet?.devices) return []

                return this.cabinet.devices.map(device => ({
                    ...device,
                    status: device.status || (Math.random() > 0.2 ? 'online' : 'offline'),
                    mac: device.mac || this.generateRandomMac(),
                    manufacturer: this.getManufacturerByModel(device.model),
                    installDate: device.installDate || '2023-01-15',
                    lastUpdate: device.lastUpdate || '2024-03-20',
                    portsInfo: this.getPortsInfo(device)
                }))
            },

            breadcrumbs() {
                return [
                    {
                        title: 'Корпуса',
                        disabled: false,
                        to: '/'
                    },
                    {
                        title: this.building?.title || 'Корпус',
                        disabled: false,
                        to: `/${this.buildingId}`
                    },
                    {
                        title: `${this.floorId} этаж`,
                        disabled: false,
                        to: `/building/${this.buildingId}/floor/${this.floorId}`
                    },
                    {
                        title: this.cabinet?.name || 'Шкаф',
                        disabled: true
                    }
                ]
            }
        },

        methods: {
            getDeviceIcon(type) {
                const icons = {
                    'Коммутатор': 'mdi-switch',
                    'Роутер': 'mdi-router',
                    'Маршрутизатор': 'mdi-router-network',
                    'Сервер': 'mdi-server',
                    'Патч-панель': 'mdi-ethernet',
                    'ИБП': 'mdi-battery',
                    'Медиаконвертер': 'mdi-connection'
                }
                return icons[type] || 'mdi-devices'
            },

            getDeviceColor(type) {
                const colors = {
                    'Коммутатор': 'primary',
                    'Роутер': 'success',
                    'Маршрутизатор': 'info',
                    'Сервер': 'secondary',
                    'ИБП': 'warning'
                }
                return colors[type] || 'grey'
            },

            getPortsInfo(device) {
                if (device.type !== 'Коммутатор') return '—'
                const used = Math.floor(Math.random() * 24)
                return `${used}/24`
            },

            getTotalPortsCount(device) {
                return device.type === 'Коммутатор' ? 24 : 0
            },

            getUsedPortsCount(device) {
                return Math.floor(Math.random() * 24)
            },

            getPortVisualization(device) {
                const ports = []
                const totalPorts = this.getTotalPortsCount(device)

                for (let i = 1; i <= totalPorts; i++) {
                    const isWan = i <= 12
                    const isUplink = (i === 1) || (i === 24)
                    const used = Math.random() > 0.3

                    ports.push({
                        number: i,
                        type: isWan ? 'wan' : 'lan',
                        used,
                        uplink: isUplink,
                        label: isWan ? 'WAN' : 'ЗСПД',
                        device: used ? this.getConnectedDevice(i) : null
                    })
                }

                return ports
            },

            getPortClass(port) {
                if (!port.used) return 'port-free'
                if (port.uplink) return 'port-uplink'
                return port.type === 'wan' ? 'port-wan' : 'port-lan'
            },

            getPortStats(device, type) {
                const ports = this.getPortVisualization(device)

                if (type === 'free') {
                    return { total: ports.filter(p => !p.used).length }
                }

                if (type === 'uplink') {
                    const uplinkPorts = ports.filter(p => p.uplink)
                    return {
                        total: uplinkPorts.length,
                        used: uplinkPorts.filter(p => p.used).length
                    }
                }

                const typedPorts = ports.filter(p => p.type === type)
                return {
                    total: typedPorts.length,
                    used: typedPorts.filter(p => p.used).length
                }
            },

            getConnectedDevice(portNumber) {
                const connections = {
                    1: 'Роутер провайдера',
                    12: 'Сервер',
                    24: 'Магистральный коммутатор'
                }
                return connections[portNumber] || null
            },

            showPortDetails(port) {
                // Можно добавить диалог с детальной информацией о порте
                console.log('Port clicked:', port)
            },

            generateRandomMac() {
                return 'XX:XX:XX:XX:XX:XX'.replace(/X/g, () =>
                    '0123456789ABCDEF'[Math.floor(Math.random() * 16)]
                )
            },

            getManufacturerByModel(model) {
                if (model.includes('Cisco')) return 'Cisco Systems'
                if (model.includes('MikroTik')) return 'MikroTik'
                if (model.includes('D-Link')) return 'D-Link'
                if (model.includes('HP')) return 'Hewlett Packard'
                if (model.includes('TP-Link')) return 'TP-Link'
                return null
            }
        },

        watch: {
            cabinetId: {
                handler() {
                    this.expandedItems = []
                }
            }
        }
    }
</script>

<style scoped>
    /* Сетка портов */
    .ports-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 8px;
    }

    .port-item {
        aspect-ratio: 1;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
    }

    .port-wan {
        background: #4CAF50;
    }

    .port-lan {
        background: #FFC107;
    }

    .port-uplink {
        background: #F44336 !important;
    }

    .port-free {
        background: #9E9E9E;
        opacity: 0.5;
    }

    .port-number {
        font-size: 12px;
        font-weight: bold;
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .port-icon {
        position: absolute;
        top: 2px;
        right: 2px;
        color: white;
    }

    /* Легенда */
    .port-legend {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }

    .bg-wan {
        background: #4CAF50;
    }

    .bg-lan {
        background: #FFC107;
    }

    .bg-uplink {
        background: #F44336;
    }

    .bg-free {
        background: #9E9E9E;
    }

    .gap-3 {
        gap: 16px;
    }

    /* Hover эффекты */
    .port-item:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    :deep(.v-data-table__td) {
        cursor: pointer;
    }
</style>