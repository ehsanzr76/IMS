<template>
  <base-material-card
    icon="mdi-pencil"
    title="ایجاد کارمند جدید"
    class="px-5 py-3"
  >
    <v-form>
      <v-container class="py-0">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="نام"
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              class="purple-input"
              label="ایمیل"
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="ایمیل"
              class="purple-input"
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="تاریخ عضویت"
              class="purple-input"
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="کد ملی"
              class="purple-input"
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="حقوق"
              class="purple-input"
            />
          </v-col>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              label="عکس"
              class="purple-input"
            />
          </v-col>

          <v-col cols="12">
            <v-textarea
              class="purple-input"
              label="آدرس محل سکونت"
            />
          </v-col>

          <v-col
            cols="12"
            class="text-center"
          >
            <v-btn
              color="success"
              class="mr-0"
              outlined
            >
              ثبت
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </base-material-card>
</template>

<script>
export default {
  name: "Create"
}
</script>

<style scoped>

</style>
