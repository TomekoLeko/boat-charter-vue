import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import Yachts from './components/Yachts';
import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '*', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/yachts', component: Yachts }
]
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
