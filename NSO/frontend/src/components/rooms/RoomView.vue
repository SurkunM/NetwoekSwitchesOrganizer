<template>
    <v-card>
        <v-card-title class="d-flex align-center">
            <v-btn color="primary"
                   variant="tonal"
                   prepend-icon="mdi-arrow-left"
                   @click="$emit('back')"
                   class="mr-4">
                Назад
            </v-btn>

            <v-icon icon="mdi-door" size="large" class="mr-2"></v-icon>
            Кабинет {{ roomNumber }}
        </v-card-title>

        <v-card-text>
            <v-data-table :headers="headers"
                          :items="devices"
                          item-value="id"
                          hide-default-footer
                          show-expand>
                <template v-slot:item.data-table-expand="{ internalItem, isExpanded, toggleExpand }">
                    <v-btn :append-icon="isExpanded(internalItem) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                           :text="isExpanded(internalItem) ? 'Скрыть' : 'Подробнее'"
                           class="text-none"
                           color="medium-emphasis"
                           size="small"
                           variant="text"
                           width="105"
                           border
                           slim
                           @click="toggleExpand(internalItem)"></v-btn>
                </template>

                <template v-slot:expanded-row="{ columns, item }">
                    <tr>
                        <td :colspan="columns.length" class="py-2">
                            <v-sheet rounded="lg" border>
                                <v-table density="compact">
                                    <thead>
                                        <tr class="bg-surface-light">
                                            <th>Состояние</th>
                                            <th>Описание</th>
                                            <th>Подключенные устройства</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td class="py-2">
                                                <v-rating :model-value="item.details.rating"
                                                          color="orange-darken-2"
                                                          density="comfortable"
                                                          size="small"
                                                          half-increments
                                                          readonly></v-rating>
                                            </td>
                                            <td class="py-2">{{ item.details.synopsis }}</td>
                                            <td class="py-2">{{ item.details.cast.join(', ') }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-sheet>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            buildingId: {
                type: [String, Number],
                required: true
            },
            floorId: {
                type: [String, Number],
                required: true
            },
            roomNumber: {
                type: [String, Number],
                required: true
            }
        },

        emits: ['back'],

        data() {
            return {
                headers: [
                    { width: 300, title: 'Название устройства', key: 'title', align: 'start', sortable: true },
                    { width: 250, title: 'Описание', key: 'director' },
                    { width: 150, title: 'Порты WAN', key: 'genre' },
                    { width: 130, title: 'Порты LAN', key: 'year' },
                    { width: 140, title: 'Свободно', key: 'runtime' },
                    { width: 1, key: 'data-table-expand' }
                ],

                devices: [
                    {
                        id: 1,
                        title: "Eltex",
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 12,
                        details: {
                            synopsis: 'Работает стабильно, обновление ПО 2 месяца назад',
                            cast: ['Коммутатор', 'Маршрутизатор', 'Патч-панель'],
                            rating: 4.5,
                        },
                    },
                    {
                        id: 2,
                        title: 'Eltex',
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 5,
                        details: {
                            synopsis: 'Требуется замена блока питания',
                            cast: ['Коммутатор'],
                            rating: 2.5,
                        },
                    },
                    {
                        id: 3,
                        title: 'Eltex',
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 2,
                        details: {
                            synopsis: 'Новое оборудование, в процессе настройки',
                            cast: ['Маршрутизатор', 'Модем'],
                            rating: 5,
                        },
                    },
                    {
                        id: 4,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 5,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 6,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 7,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 8,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 9,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 10,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 11,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 12,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 13,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 14,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 15,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 16,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 17,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 18,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 19,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 20,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 20,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 21,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 22,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 23,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 24,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 25,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 26,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 27,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 28,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    },
                    {
                        id: 29,
                        title: 'D-Link',
                        director: 'дата установки 2024',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 8,
                        details: {
                            synopsis: 'Резервное оборудование',
                            cast: ['Коммутатор'],
                            rating: 3,
                        },
                    }
                ]
            }
        }
    }
</script>