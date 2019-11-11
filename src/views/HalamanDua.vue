<template>
  <b-container>
    <h3>Ini halaman 2</h3>
    <kalkulator ref="kalkulatorSaya" proses="kurang" @success="onSuccess"/>
    <b-button @click="lakukanClick">PROSES</b-button>
  </b-container>  
</template>
<script>
export default {
  data() {
    return {
      proses: "tambah"
    }
  },
  components: {
    kalkulator: () => import("@/components/Kalkulator")
  },
  methods: {
    onSuccess(data){
      console.log(data);
    },
    lakukanClick() {
      this.$refs.kalkulatorSaya.prosesClick();
    }
  }
}
</script>
<style lang="scss" scoped>

</style>