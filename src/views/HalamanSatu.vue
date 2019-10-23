<template>
  <b-container>
    <h3>Ini halaman 1</h3>
    <h5>{{nama}}</h5>
  </b-container>  
</template>
<script>
export default {
  name: "HalamanSatu",
  data() {
    return{
      nama: "Rizky",
      produk: []
    }
  },
  created() {
    console.log("awal");
    this.ambilData();
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    ambilData(){
      //console.log("ini ambil data");
      const URL = "http://localhost/latihan_lks/public/api";
      this.$http.get(
        `${URL}/product`,
        {
          headers: {
            "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1YjFjMmM0MDZjOTdmODg2Mzg2NDg5NWM5MjdjMWUxODhlNDU5MTk5MTMwNWI5NDMwMGQ5N2EyNWM1ZmM2MzRlNWNkYWE1ODAyZmYyMzUyIn0.eyJhdWQiOiIxIiwianRpIjoiZDViMWMyYzQwNmM5N2Y4ODYzODY0ODk1YzkyN2MxZTE4OGU0NTkxOTkxMzA1Yjk0MzAwZDk3YTI1YzVmYzYzNGU1Y2RhYTU4MDJmZjIzNTIiLCJpYXQiOjE1NzE4MTI5NDQsIm5iZiI6MTU3MTgxMjk0NCwiZXhwIjoxNjAzNDM1MzQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ai4mNX3nedfaIXVgEGQanAsy5uIjrDEqud9NCQ_ZUx4O-pW3L5SVooTQeHb9zFib9c6Zbbxc1FnsK3_JQtjIO__T5ngSfrzSfAqiWlD7l3Yk-1rq2629KkJ9h6cq1h9jVNNSij8_lRz4ctN34iZkOhj4GwVCscqQPe9XFjNK8zBXoypwkjG86Nrx8yqBw7Qk8ROZmjfi692oC1-dRsQutMPVNhobtygpuqXwC4nqRuESrE2IlYoVAR54ryOZJg0yl3EYepyWEJ_Ro7GOGghYvMGqLXndYV-FKUmvefB4DQc9n5UIobxxp14kii71z1UAMsI5jNvsZDHQ7OB3NiA9jupbjgwgv39ibJ21OoMrV9YsgS4ZHpeRy8k-dpgKVX3RbsZbnppvbO5W42rvXc60dO9Jpmp4C6tFJZGoSWJ1tw-LIvrfTBRWdKQVro8zxfPGp_CXNAnGN4O-q1V9jJQiNL0c2MVUohIAcYOsMg7CRwy3-pKDr2xD0FQMMY3sx9R4UdXjgcH3ZDymiyk4ocicrpxSUQr5UIzFCKxV2ztEUtOeGvGcGq_K7iREBZTiqpBt9v9yENtoD33saA4rqj0ic2cjp5xs1c_13AEbbZudsCT1UpbeoHzJ4R-4Bvl11ZQc8d8o60C9yb3pQzrUNjfA4vl8MYhIj8RMwH3ZvGOJFag`
          }
        }
      )
      .then((response)=>{
        console.log(response);
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>