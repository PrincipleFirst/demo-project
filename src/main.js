import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)

const router = createRouter()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
