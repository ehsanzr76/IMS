import Vue from 'vue'
import Router from 'vue-router'
import Register from "@/views/auth/Register";
import Dashboard from "@/views/dashboard/Dashboard";
import Login from "@/views/auth/Login";
import store from "@/store";

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
          component: () => import("@/views/auth/Login"),
        },

        // Register
        {
          name: 'Register',
          path: '/register',
          component: () =>  import('@/views/auth/Register'),
        },

        // Logout
        {
          name: 'Logout',
          path: '/logout',
          component: () =>  import("@/views/auth/Logout"),
        },


        // Forget Password
        {
          name: 'ForgetPassword',
          path: '/ForgetPassword',
          component: () => import('@/views/auth/ForgetPassword'),
        },

        // Dashboard
        {
          name: 'داشبورد',
          path: '',
          meta:{
            requiresAuth:true ////user should be login
          },
          component: () => import('@/views/dashboard/Dashboard'),
        },

        // Pages
        {
          name: 'Users',
          path: 'users',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },

        //Employee
        {
          name: 'کارمندان',
          path: '/employees',
          component: () => import("@/views/employee/Employees"),
        },

      ],
    },
  ],
});
router.beforeEach((to, from, next) => {

  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    // redirect to login page
    next({ name: 'Login' })
    return
  }

  // if logged in redirect to dashboard
  if(to.path === '/login' && store.state.isLoggedIn) {
    next({ name: 'Dashboard' })
    return
  }

  next()
})
export default router;
