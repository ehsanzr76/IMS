<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="9">
        <v-card class="elevation-8" outlined rounded>
          <v-toolbar dark color="gray">
            <v-toolbar-title>ثبت نام</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="نام"
                name="name"
                type="text"
                prepend-inner-icon="mdi-account"
                outlined
                rounded
              >
              </v-text-field>
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
              <v-text-field
                label="تکرار رمز عبور"
                name="password"
                type="password"
                prepend-inner-icon="mdi-lock"
                outlined
                rounded
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" outlined dark style="font-size: large" class="mb-5">
              <span class="px-10">تایید</span>

            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
