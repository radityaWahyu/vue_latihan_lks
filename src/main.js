import Vue from "vue";
import App from "./App.vue"; //Dipergunakan untuk memanggil component App
import router from "./router"; //Dipergunakan untuk menghandle URL
import store from "./store"; //Dipergunakan untuk mengimport vuex
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
