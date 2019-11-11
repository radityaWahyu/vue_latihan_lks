<template>
  <div>
    <b-form-input v-model="bil_satu" placeholder="Angka 1"></b-form-input>
    <b-form-input v-model="bil_dua" placeholder="Angka 2"></b-form-input>
    
  </div>
</template>
<script>
export default {
  name: "Kalkulator",
  props: {
    proses: {
      type: String,
      required: true
    }
  },
  data() {
    return{
      bil_satu: 0,
      bil_dua: 0
    }
  },
  methods: {
    prosesClick(){
      let hasil = 0;
      if(this.proses === "tambah") {
        hasil = parseInt(this.bil_satu) + parseInt(this.bil_dua);
      }else if(this.proses === "kurang") {
        hasil = parseInt(this.bil_satu) - parseInt(this.bil_dua);
      }

      alert(`Hasilnya adalah ${hasil}`);
      this.$emit("success", "berhasil");
    }
  }
}
</script>