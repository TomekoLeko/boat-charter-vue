import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import Yachts from './components/Yachts';
import Home from './components/Home'
import YachtPage from './components/YachtPage'
import AboutUs from './components/AboutUs'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '*', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/yachts', component: Yachts },
  { path: '/yacht/:id', name: 'yacht', component: YachtPage }

]
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
