<template>

</template>

<script>
import store from "@/store";

export default {
  name: "Logout",

  mounted () {
    localStorage.removeItem('token')
    store.commit('logoutUser')
    this.$router.push({ name: 'Login' })
    Toast.fire({
      icon: 'success',
      title: '.خروج با موفقیت انجام شد'
    })

  }
}
</script>

<style scoped>

</style>
