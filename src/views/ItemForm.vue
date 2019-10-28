<template>
  <b-container class="text-left pt-4">
    <h4 class="">Form Barang</h4>
    <b-form >
      <b-form-group
        label="Nama Barang"
      >
        <b-form-input
          v-model="name"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Deskripsi"
      >
        <b-form-input
          v-model="description"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Harga"
      >
        <b-form-input
          v-model="price"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Stok"
      >
        <b-form-input
          v-model="stock"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Gambar"
      >
        <b-form-input
          v-model="images"
          type="text"
        ></b-form-input>
      </b-form-group>
      <div class="text-right">
        <b-button variant="primary" @click="onSubmit">Simpan</b-button>
      </div>
    </b-form>
  </b-container>
</template>
<script>
export default {
  name: "ItemForm",
  data() {
    return {
      name: "",
      price: "",
      description: "",
      images: "",
      stock: "",
      url: process.env.VUE_APP_API_URL,
      token: localStorage.getItem("token"),
      isEdit: false
    }
  },
  created() {
    //console.log(this.$route.params.id);
  },
  watch: {
    "$route.params.id": {
      deep: true,
      immediate: true,
      handler: function(value) {
        if(value !== undefined) {
          this.isEdit = true;
          //taruh fungsi mengeluarkan spinner
          this.$http.get(`${this.url}product/${value}`,{
            headers: {
              "Authorization":`Bearer ${this.token}`
            }
          }).then((response)=>{
            //console.log(response);
            
            this.name = response.data.data.name;
            this.price = response.data.data.price;
            this.description = response.data.data.description;
            this.images = response.data.data.image;
            this.stock = response.data.data.stock;
            //taruh fungsi menghilangkan spinner
          });
        } else {
          this.isEdit = false;
        }
      }
    }
  },
  methods: {
    onSubmit() {
      if(this.isEdit === true) {
        let id = this.$route.params.id;
        this.$http.patch(`${this.url}product/${id}`,
        {
          name: this.name,
          description: this.description,
          price: this.price,
          stock: this.stock,
          image: this.images
        },
        {
          headers: {
            "Authorization":`Bearer ${this.token}`
          }
        }).then((response) => {
          if(response.data.status === "success" ) {
            this.$router.push({name: "halamanSatu"});
          }else{
            alert("gagal disimpan");
          }
        });
      } else {
        this.$http.post(`${this.url}product`,
        {
          name: this.name,
          description: this.description,
          price: this.price,
          stock: this.stock,
          image: this.images
        },
        {
          headers: {
            "Authorization":`Bearer ${this.token}`
          }
        }).then((response) => {
          if(response.data.status === "success" ) {
            this.$router.push({name: "halamanSatu"});
          }else{
            alert("gagal disimpan");
          }
        });
      }
    }
  } 
}
</script>
<style lang="scss" scoped>

</style>