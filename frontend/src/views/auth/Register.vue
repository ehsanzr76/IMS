<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="9">
        <v-card class="elevation-8" outlined rounded>
          <v-toolbar dark color="gray">
            <v-toolbar-title>ثبت نام</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent ="register">
              <v-text-field
                label="نام"
                name="name"
                type="text"
                v-model="form.name"
                :error="errors.name"
                :error-messages="errors.name"
                prepend-inner-icon="mdi-account"
                outlined
                rounded
              >
              </v-text-field>
              <v-text-field
                label="ایمیل"
                name="email"
                type="email"
                v-model="form.email"
                :error="errors.email"
                :error-messages="errors.email"
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
                prepend-inner-icon="mdi-lock"
                outlined
                rounded
              >
              </v-text-field>
              <v-text-field
                label="تکرار رمز عبور"
                name="password"
                type="password"
                v-model="form.password_confirmation"
                :error="errors.password_confirmation"
                :error-messages="errors.password_confirmation"
                prepend-inner-icon="mdi-lock"
                outlined
                rounded
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" outlined dark style="font-size: large" class="mb-5" @click.prevent="SendRegisterRequest">
              <span class="px-10">تایید</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from "@/store";

export default {
  name: "register",
  data() {
    return {
      form: {
        name:null,
        email: null,
        password: null,
        password_confirmation:null,
      },
      errors:{}
    }
  },
  methods: {
    SendRegisterRequest() {
      axios.post('http://localhost/api/auth/register', this.form)
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: '.ثبت نام با موفقیت انجام شد'
          })
          this.$router.push('/');
        }).catch(err => {
        if (err.response.status === 422) {
          this.errors = err.response.data.errors;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
