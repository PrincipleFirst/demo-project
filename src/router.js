import Router from 'vue-router'

const Login = () => import('views/Login')
const Instance = () => import('views/Instance')

export default () => new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/instance',
      component: Instance,
    },
  ],
  mode: 'history',
})
