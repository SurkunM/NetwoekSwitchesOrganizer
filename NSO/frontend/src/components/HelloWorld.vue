<template>
    <v-data-table :headers="headers"
                  :items="movies"
                  item-value="title"
                  hide-default-footer
                  show-expand>
        <template v-slot:item.data-table-expand="{ internalItem, isExpanded, toggleExpand }">
            <v-btn :append-icon="isExpanded(internalItem) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                   :text="isExpanded(internalItem) ? 'Collapse' : 'More info'"
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
                            <tbody class="bg-surface-light">
                                <tr>
                                    <th>Rating</th>
                                    <th>Synopsis</th>
                                    <th>Cast</th>
                                </tr>
                            </tbody>

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
</template>

<script>
    export default {
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

                movies: [
                    {
                        title: "Eltex",
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 12,
                        details: {
                            synopsis: 'Two imprisoned men bond over years, finding solace and redemption through acts of decency.',
                            cast: ['Tim Robbins', 'Morgan Freeman'],
                            rating: 3.5,
                        },
                    },
                    {
                        title: 'Eltex',
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 5,
                        details: {
                            synopsis: 'Interwoven stories of criminals, violence, and redemption in Los Angeles.',
                            cast: ['John Travolta', 'Samuel L. Jackson'],
                            rating: 4.5,
                        },
                    },
                    {
                        title: 'Eltex',
                        director: 'дата установки 2025',
                        genre: "1-10",
                        year: "11-24",
                        runtime: 2,
                        details: {
                            synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                            cast: ['Christian Bale', 'Heath Ledger'],
                            rating: 4,
                        },
                    },
                ]
            }
        }
    }
</script>