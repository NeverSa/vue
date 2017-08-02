import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require.ensure(['../component/home'], () => {
          resolve(require('../component/home'));
        });
      }
    },

  ]
})
