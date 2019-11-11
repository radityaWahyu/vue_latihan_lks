<template>
  <div class="w-50 text-left mt-5 mx-auto">
    <b-card>
      <div >
        <b-form-group
          label="email"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="text"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
        >
          <b-form-input
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" @click="onSubmit">Log In</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex"
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  computed: {
    ...mapGetters({
      url: "api/getUrl",
      user: "auth/getUser"
    })
  },
  methods: {
    ...mapMutations("auth",["set_user", "set_token"]),
    onSubmit() {
      this.$http.post(`${this.url}login`,
        {
          email: this.form.email,
          password: this.form.password
        }).then((response) => {
          console.log(response);
          if(response.data.status === "success"){
            localStorage.setItem("token",response.data.token);
            this.set_token(response.data.token);
            this.set_user(response.data.data);
            console.log(this.user);
            this.$router.push({name: "halamanSatu"});
          } else {
            alert("Username dan password tidak terdaftar");
          }
        });
    }
  }
};
</script>