/**
 * Created by zongchaoyang on 2017/4/25.
 */
import Vue from 'vue'
import Vuex from "vuex"
import router from './router'
import App from './App.vue'
import axios from  "axios"
import flexible from "./assets/js/flexible.js"

Vue.config.productionTip = false


import  { ToastPlugin ,AjaxPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(Vuex);

Vue.prototype.msg=function (msg) {
    return Vue.$vux.toast.show({
        type:"text",
        text: msg,
        position:"bottom",
        width:"8rem"
    })
}




const vuex_store = new Vuex.Store({
    state:{
        islogin:false,
        neednav:true,
        IP:"http://localhost:3000"
    }
})

new Vue({
    el: '#app',
    router,
    store:vuex_store,
    template: '<App/>',
    components: { App }
})
