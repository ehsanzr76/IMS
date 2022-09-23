import Vue from 'vue'
import Router from 'vue-router'
import Register from "@/views/auth/Register";
import Dashboard from "@/views/dashboard/Dashboard";
import Login from "@/views/auth/Login";

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [


    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [


        // Login
        {
          name: 'Login',
          path: '/login',
          // meta:{
          //   requiresAuth:true
          // },
          component: () => import("@/views/auth/Login"),
        },

        // Register
        {
          name: 'Register',
          path: '/register',
          // meta:{
          //   requiresAuth:true
          // },
          component: () =>  import('@/views/auth/Register'),
        },


        // Forget Password
        {
          name: 'ForgetPassword',
          path: '/ForgetPassword',
          component: () => import('@/views/auth/ForgetPassword'),
        },

        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },

        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
});
// router.beforeEach((to , from , next)=>{
//   if (to.meta.requiresAuth){
//     if (axios.post('http://localhost/api/auth/login')){
//       next({
//         name:"Dashboard"
//       });
//     }else {
//       next();
//     }
//
//   }else {
//     next();
//   }
// })
export default router;
