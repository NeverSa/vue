import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component (resolve) {
        require.ensure(['../component/home'], () => {
          resolve(require('../component/home'));
        });
      },
      children:[
        {
          name:"takeout",
          path: 'takeout',
          component (resolve) {
            require.ensure(['../component/TakeOutIndex'], () => {
              resolve(require('../component/TakeOutIndex'));
            });
          },
        }
      ]
    },

  ]
})
