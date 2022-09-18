<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="9">
        <v-card class="elevation-8" outlined rounded>
          <v-toolbar dark color="gray">
            <v-toolbar-title>ورود به حساب کاربری</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>

              <v-text-field
                label="ایمیل"
                name="email"
                type="email"
                prepend-inner-icon="mdi-email"
                outlined
                rounded
              >
              </v-text-field>

              <v-text-field
                label="رمز عبور"
                name="password"
                type="password"
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

            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" outlined dark style="font-size: large" class="mb-5">
              <span class="px-10">ورود</span>

            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style scoped>

</style>
