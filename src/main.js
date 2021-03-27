import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from '@/assets/css/main.css'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";
Vue.config.productionTip = false
Vue.use(style)

// Notifaction


Vue.use(Toast, {
  position: "top-center",
  timeout: 1200,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.35,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 11,
  newestOnTop: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
