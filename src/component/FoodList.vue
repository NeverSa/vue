<template>
    <div style="height:100%;display: flex;flex-direction: column">
        <div>asda</div>
        <div style="flex:1;overflow-x: hidden"> <p v-for="i in 100">{{i}}</p></div>
        <div>qweqeq</div>
    </div>
</template>

<script>
    import { ViewBox,Tabbar } from 'vux'
    export default {
        Props:[],
        components:{ViewBox,Tabbar},
        data () {
            return {}
        },

        methods: {}

    }
</script>
<style>
    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
</style>