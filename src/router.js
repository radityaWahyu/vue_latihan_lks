import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "halamanSatu",
      component: () =>import("./views/HalamanSatu.vue")
    },
    {
      path: "/hal2",
      name: "halamanDua",
      component: () =>import("./views/HalamanDua.vue")
    },
    {
      path: "/barang/add",
      name: "addBarang",
      component: () => import("./views/ItemForm.vue")
    }
  ]
});
