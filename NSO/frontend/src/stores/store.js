import axios from "axios";
import { defineStore } from "pinia";

export const useBuildingsStore = defineStore("buildings", {
    state: () => ({
        buildings: [],
        cabinets: [],

        isLoading: false
    }),

    getters: {
        getBuildingById: (state) => (id) => {
            return state.buildings.find(building => building.id == id);
        },

        getAllBuildings: (state) => {
            return state.buildings;
        },

        getCabinetById: (state) => (id) => {
            return state.cabinets.find(cabinet => cabinet.id == id);
        },

        getCabinets: (state) => {
            return state.cabinets;
        },

        getCabinetsByFloor: (state) => (buildingId, floorId) => {
            return state.cabinets.filter(cabinet =>
                cabinet.buildingId == buildingId && cabinet.floor == floorId
            );
        }
    },

    actions: {
        loadBuildings() {
            this.isLoading = true;

            return axios.get("/api/SwitchesOrganizer/GetBuildings")
                .then(response => {
                    this.buildings = response.data;
                })
                .catch(error => {
                    alert(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },

        loadCabinets() {
            this.isLoading = true;

            return axios.get("/api/SwitchesOrganizer/GetCabinets")
                .then(response => {
                    this.cabinets = response.data;
                })
                .catch(error => {
                    alert(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    }
});