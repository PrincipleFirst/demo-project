import Vue from 'vue';
import Router from 'vue-router';
const Login = () => import('views/Login')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
