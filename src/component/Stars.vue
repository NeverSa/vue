<template>
    <div class="stars">
      <div class="yellow" :style="'width:' + score*16+'px'"><span v-for="item in 5" class="iconfont icon-zaocan "></span></div>
        <div class="gray"   ><span v-for="item in 5" class="iconfont icon-zaocan "></span></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name:'Vstars',
        props:["score"],
        data(){
        return {

        }
    },
    methods:{
    },
    watch: {

    },
    created(){

    }
    }
</script>
<style>

</style>