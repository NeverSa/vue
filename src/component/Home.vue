<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <router-view></router-view>
            asdad
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
    import { ViewBox,Tabbar, TabbarItem  } from 'vux'
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
