<template>
  <v-app>
    <dashboard-core-app-bar v-if="!isLogin && !isRegister && !isForgetPassword"/>
    <dashboard-core-drawer v-if="!isLogin && !isRegister && !isForgetPassword"/>
    <dashboard-core-view/>
    <dashboard-core-footer/>
  </v-app>
</template>
<script>
export default {
  name: 'DashboardIndex',

  components: {
    DashboardCoreAppBar: () => import('./components/core/AppBar'),
    DashboardCoreDrawer: () => import('./components/core/Drawer'),
    DashboardCoreSettings: () => import('./components/core/Settings'),
    DashboardCoreView: () => import('./components/core/View'),
    DashboardCoreFooter: () => import('./components/core/Footer'),
  },
  computed:{
    isLogin(){
      return this.$route.name==="Login"
    },
    isRegister(){
      return this.$route.name==="Register"
    },
    isForgetPassword(){
      return this.$route.name==="ForgetPassword"
    }
  },
  data: () => ({
    expandOnHover: false,
  }),
}
</script>
