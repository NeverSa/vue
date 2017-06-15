<template>
    <div>
        <div class="orgserch">
            <div><a href="#"><i class="iconfont icon-meishi text-white"></i></a> </div>
            <div class="centercontent">美食</div>
            <div><i class="iconfont icon-meishi"></i></div>
        </div>
        <div class="typenav"  ref="nav">
            <ul>
                <li class="active" @click="change(0)">1</li>
                <li @click="change(1)">2</li>
                <li @click="change(2)">3</li>
                <li @click="change(3)">4</li>
                <li @click="change(4)">5</li>
                <li @click="change(5)">6</li>
                <li @click="change(6)">7</li>
                <li @click="change(7)">8</li>
                <li @click="change(8)">9</li>
                <li @click="change(9)">10</li>
            </ul>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    export default {
        name:"orglist",
        data () {
        return {

        }
    },
    methods:{
        change(index){
            let le=10;
            if(index<3||index>(le-3)){
                return
            }else{
                this.menuScroll.scrollTo(-(index-2)*60, 0,300,"circular")
            }

        },
        _initScroll(){
            this.menuScroll = new BScroll(this.$refs.nav, {
                probeType: 3,
                click: true,
                scrollX:true,
                scrollY:false,
            });


        }
    },

    computed:{

    },
    created(){
        this.$nextTick(() => {
           this._initScroll()
        });
    }
    }

</script>

<style >

</style>