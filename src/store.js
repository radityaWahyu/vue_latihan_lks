import Vue from "vue";
import Vuex from "vuex";
import auth from "./stores/Auth.js"
import api from "./stores/Api.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlAxios: process.env.VUE_APP_API_URL
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    api
  }
});
