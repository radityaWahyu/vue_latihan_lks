<template>
  <b-container>
    <h3>Ini halaman 1</h3>
    <b-button variant="primary" class="mb-4" :to="{ name:'addBarang' }">Tambah Data</b-button>
    <b-table
      striped
      hover
      :items="produk"
      :fields="column"
    >
      <template v-slot:cell(name)="row">
        <strong>{{row.value}}</strong>
      </template>
       <template v-slot:cell(aksi)="row">
        <b-button class="mx-1" :to="{name: 'editBarang',params: { id: row.item.item_id }}">Edit </b-button>
        <b-button class="mx-1" variant="danger" @click="hapus(row.item.item_id)">Hapus</b-button>
       </template>
    </b-table>
  </b-container>  
</template>
<script>
export default {
  name: "HalamanSatu",
  data() {
    return{
      nama: "Rizky",
      produk: [],
      url: process.env.VUE_APP_API_URL,
      token: localStorage.getItem("token"),
      column: [
        {
          key: "name",
          label: "Nama Barang",
          sortable: false
        },
        {
          key: "description",
          label: "Deskripsi",
          sortable: false
        },
        {
          key: "aksi",
          label: "Aksi",
          sortable: false
        }
      ]
    }
  },
  created() {
    
    this.ambilData();
  },
  mounted() {
    //console.log("mounted");
  },
  methods: {
    ambilData() {
      this.$http.get(`${this.url}product`,{
        headers: {
          "Authorization":`Bearer ${this.token}`
        }
      }).then((response) => {
        console.log(response);
        this.produk = response.data.data;
      });
    },
    hapus(id) {
      this.$http.delete(`${this.url}product/${id}`,{
        headers: {
          "Authorization":`Bearer ${this.token}`
        }
      }).then((response) => {
        console.log(response);
        if(response.data.status === "success") {
          alert("Data berhasil dihapus");
          this.ambilData();
        } else {
          alert("Data gagal dihapus");
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>