<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <div slot="header"  class="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
               <input placeholder="搜索商家，商品名称">
            </div>
            <router-view style="margin-top: 80px;">

            </router-view>

            <tabbar slot="bottom">
                <tabbar-item link="/orderindex">
                    <span slot="label" style="color:#dd2727">网上订购</span>
                </tabbar-item>
                <tabbar-item link="/sort">
                    <span slot="label">智慧餐厅</span>
                </tabbar-item>
                <tabbar-item link="/car">
                    <span slot="label">我的</span>
                </tabbar-item>

            </tabbar>
        </view-box>

    </div>
</template>

<script type="text/ecmascript-6">
    import { ViewBox,Tabbar, TabbarItem } from 'vux'
    export default {

        components:{ViewBox,Tabbar, TabbarItem},
        data () {
            return {}
        },
        methods:{}
    }
</script>
<style>

</style>
