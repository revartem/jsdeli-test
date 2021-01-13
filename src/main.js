import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [

  { path: '/table', component: Table }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
