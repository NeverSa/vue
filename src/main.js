/**
 * Created by zongchaoyang on 2017/4/25.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from "vuex"
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './component/Home.vue'
import nearby from './component/Nearby.vue'
import order from './component/Order.vue'
import perpersonalcenter from "./component/PersonalCenter.vue"
import goods from "./component/Goods.vue"
import orglist from "./component/OrgList.vue"
 import secondpage from "./component/SecondPage.vue"
//import login from "./component/Login.vue"

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/home', component: home},
        {path:'/nearby',component:nearby},
        {path:'/order',component:order},
        {path:'/perpersonalcenter',component:perpersonalcenter},
        {path:'/goods/:orgid',component:goods},
        {path:'/orglist/',component:orglist},
        {path:'/secondpage/:bigclass',component:secondpage}
        //{path:'/login',component:login}

    ]
})

const vuex_store = new Vuex.Store({
    state:{
        islogin:false,
        neednav:true,
        IP:"http://localhost:3000"
    }
})

new Vue({
    el: '#app',
    router: router,
    store:vuex_store,
    render: h => h(App)
})

