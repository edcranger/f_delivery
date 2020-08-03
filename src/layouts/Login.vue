<template>
  <div class="loginForm row justify-center">
    <div class="col-xs-11 col-sm-6 q-pa-md text-center">
      <h1 class="text-h3 q-ma-none ">
        <span class="text-weight-bolder">F</span>-Rider
      </h1>
      <h6 class="text-subtitle2 q-ma-xs text-italic">
        "We deliver <span class="text-weight-bolder">Fast</span> and
        <span class="text-weight-bolder">Secure</span>.
      </h6>
      <q-form @submit.prevent.stop="submitLogin()">
        <p v-if="showError" class="text-red">
          {{ showError }}
        </p>
        <q-input
          label="Username"
          v-model.trim="username"
          :rules="[
            val => (val && val.length > 0) || 'Please enter your username',
            val => $v.username.minLength || 'Username minimum length is 6'
          ]"
        />
        <q-input
          label="Password"
          type="password"
          v-model.trim="password"
          :rules="[
            val => (val && val.length > 0) || 'Please enter your password',
            val => $v.password.minLength || 'Password minimum length is 6'
          ]"
        />
        <q-btn
          :loading="loading"
          class="q-pa-xs"
          color="dark"
          type="submit"
          style="width: 150px"
        >
          Login
          <template v-slot:loading>
            <q-spinner-ball />
          </template>
        </q-btn>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  beforeCreate() {
    if (this.$store.getters["auth/isLoggedIn"]) {
      return this.$router.replace("/");
    }
  },
  computed: {
    ...mapGetters("auth", ["getAuthErr", "isLoggedIn"]),
    showError() {
      return this.getAuthErr;
    }
  },
  methods: {
    ...mapActions("auth", ["loginRider"]),
    submitLogin() {
      this.loading = true;
      this.loginRider({
        username: this.username,
        password: this.password
      })
        .then(res => {
          this.$router.push("/");
          this.loading = false;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
.loginForm {
  margin-top: 100px;
}
</style>
