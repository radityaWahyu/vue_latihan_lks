<template>
  <div id="app">
    <layout-header v-if="isAuth"/>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import LayoutHeader from "@/components/LayoutHeader.vue";
export default {
  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth",
      user: "auth/getUser",
      url: "api/getUrl"
    })
  },
  components: {
    LayoutHeader
  },
  created() {
   
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
