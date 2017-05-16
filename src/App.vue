<template>
    <div id="app">
        <div class="content-panel">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="footer" v-show="$store.state.neednav">
            <ul>
                <li><router-link to="/home"><i class="icon iconfont icon-waimai"></i><br/>外卖</router-link></li>
                <li><router-link to="/nearby"><i class="icon iconfont icon-faxian"></i><br/>发现</router-link></li>
                <li><router-link to="/order"><i class="icon icon-order iconfont"></i><br/>订单</router-link></li>
                <li><router-link to="/perpersonalcenter"><i class="icon iconfont icon-wo"></i><br/>我的</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        mounted: function(){

        },
        methods: {

        },
        directives: {

        }
    }
</script>
<style lang="less">
  @import "assets/main.less";
  @import "assets/reset.css";
  @import "assets/font/iconfont.css";
</style>








