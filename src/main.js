import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import VueRouter from 'vue-router'
// import store from './store/store'
import store from './store/store.js'

import axios from 'axios'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('./components/ForgotPassword.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      auth: true
    },
    component: () => import('./components/Dashboard.vue')
  }
  

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/')
    return
  }
  next()
})

new Vue({
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  store: store,
  render: h => h(App),
  router
}).$mount('#app')
