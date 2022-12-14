// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import Swal from 'sweetalert2'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')



//// Start SweetAlert
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
window.Toast = Toast;
//// End SweetAlert



/// Start Noty
window.Noty = require('noty');
class Notification{
  success(){
    new Noty({
      type:'success',
      layout:'topRight',
      text:'با موفقیت انجام شد.',
      timeout:1000,
    }).show();
  }


  alert(){
    new Noty({
      type:'alert',
      layout:'topRight',
      text:'آیا مطمين هستید؟',
      timeout:1000,
    }).show();
  }


  error(){
    new Noty({
      type:'alert',
      layout:'topRight',
      text:'اشتباهی پیش آمده است',
      timeout:1000,
    }).show();
  }


  warning(){
    new Noty({
      type:'warning',
      layout:'topRight',
      text:'اخطار!اشتباهی پیش آمده است',
      timeout:1000,
    }).show();
  }
}
export default Notification = new Notification()

///End Noty


