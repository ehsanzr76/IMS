<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="9">
        <v-card class="elevation-8" outlined rounded>
          <v-toolbar dark color="gray">
            <v-toolbar-title>ورود به حساب کاربری</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">

              <v-text-field
                label="ایمیل"
                name="email"
                type="email"
                v-model="form.email"
                :error="errors.email"
                :error-messages="errors.email"
                required
                prepend-inner-icon="mdi-email"
                outlined
                rounded
              >
              </v-text-field>

              <v-text-field
                label="رمز عبور"
                name="password"
                type="password"
                v-model="form.password"
                :error="errors.password"
                :error-messages="errors.password"
                required
                prepend-inner-icon="mdi-lock"
                outlined
                rounded
              >
              </v-text-field>
              <v-switch
                label="مرا به خاطر بسپار"
                color="secondary"
              >

              </v-switch>
              <v-col cols="12" md="8">
                <router-link to="/ForgetPassword" style="text-decoration: none;color: royalblue">
              <span>
                 رمز عبور خود را فراموش کرده اید؟ کلیک کنید
              </span>
                </router-link>
              </v-col>
              <v-col cols="12" md="6">
                <router-link to="/register" style="text-decoration: none;color: royalblue">
              <span>
                ثبت نام
              </span>
                </router-link>
              </v-col>
              <v-card-actions class="justify-center">
                <v-btn color="primary" outlined dark style="font-size: large" class="mb-5"
                       @click.prevent="SendLoginRequest">
                  <span class="px-10">ورود</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import store from "@/store";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errors: {}
    }
  },
  methods: {
    SendLoginRequest() {
      axios.post('http://localhost/api/auth/login', this.form)
        .then(res => {
          store.commit('loginUser')
          localStorage.setItem('token', res.data.access_token)
          this.$router.push('/');
          Toast.fire({
            icon: 'success',
            title: '.ورود با موفقیت انجام شد'
          })
        }).catch(err => {
        if (err.response.status === 422) {
          this.errors = err.response.data.errors;
        }
      }).catch(
          Toast.fire({
            icon: 'error',
            title: '.ایمیل یا رمز عبور نادرست است'
          })
        )
    }
  }
}


</script>

<style scoped>

</style>
