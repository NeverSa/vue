import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import GoodType from '@/components/GoodType'
import Login from '@/components/Login'
import GoodDetails from '@/components/GoodDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/GoodType',
      name: 'GoodType',
      component: GoodType
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/gooddetails/:id',
      name: 'GoodDetails',
      component: GoodDetails
    }
  ]
})
