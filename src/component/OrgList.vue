<template>
    <div>
        <div class="orgserch">
            <div><a href="#"><i class="iconfont icon-meishi text-white"></i></a> </div>
            <div class="centercontent">美食</div>
            <div><i class="iconfont icon-meishi"></i></div>
        </div>
        <div class="typenav">
            <ul ref="nav" @touchstart="evstart" @touchend="evend"  :style="{ left: -getLeft+'px' }">
                <li>2</li>
                <li>qwe</li>
                <li>qwe</li>
                <li>qweq</li>
                <li>asda</li>
                <li>qweqe</li>
                <li>qweqe</li>
                <li>请问</li>
                <li>阿萨德</li>
                <li>阿萨切磋德</li>
            </ul>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        name:"orglist",
        data () {
        return {
            x1:"0",
            x2:"0",
            ullength:0
        }
    },
    methods:{
        evstart(e){
            this.x1= e.touches[0].pageX
        },
        evend(e){
           this.x2=e.changedTouches[0].pageX
        }
    },

    computed:{
        getLeft(){
            let distance=0;
            distance=this.x1-this.x2;
            if(Math.abs(distance)>this.ullength&&distance>0){
                distance=0;
            }
            return distance;
        }
    },
    created(){
        this.$nextTick(() => {
          this.ullength =this.$refs.nav.offsetWidth
        });
    }
    }

</script>

<style >

</style>