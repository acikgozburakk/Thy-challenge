import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    baseurl: "http://localhost:3000",
    cityList: [],
    originAirportCityList: [],
    destinationAirportCityList: []

  },
  mutations: {
    setCity(state, city) {
      state.cityList = city;
    },
    setOriginAirportCity(state, OriginCityName) {
      state.originAirportCityList.push(OriginCityName);
    },
    setDestinationAirportCity(state, DestinationCityName) {
      state.destinationAirportCityList.push(DestinationCityName);
    }
  },
  actions: {
    getCity({ commit, state }) {
      axios
        .get(`${state.baseurl}/city`).then((get_response) => {
          commit("setCity", get_response.data);
        }).catch(e => console.log("error", e))
    },
    getflights({ commit, state }) {
      axios
        .get(`${state.baseurl}/flights`).then((get_response) => {
          get_response.data.forEach(element => {   //Dinamikleştirmek için yapıldı.Başka veri gelirse arrayden kontrol edilecek.
            commit("setOriginAirportCity", element.originAirport.city.name);
            commit("setDestinationAirportCity", element.destinationAirport.city.name)
          });
        }).catch(e => console.log("error", e))
    },
  },
  modules: {
  },
  getters: {
    cityList: (state) => state.cityList,
    originAirportCityList: (state) => state.originAirportCityList,
    destinationAirportCityList: (state) => state.destinationAirportCityList,
  }
})
