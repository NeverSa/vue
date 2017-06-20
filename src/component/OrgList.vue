<template>
    <div>
        <div class="orgserch">
            <div><a href="#"><i class="iconfont icon-meishi text-white"></i></a> </div>
            <div class="centercontent"></div>
            <div><i class="iconfont icon-meishi"></i></div>
        </div>
        <div class="typenav"  ref="nav">
            <ul>
                <li :class="{'active':index==activeIndex}"  @click="change(index,list.BigClass,list.SmallClass)" v-for="(list,index) in goods">{{list.SamllClassName}}</li>
            </ul>
        </div>
        <div class="Recommend">

         <div class="row bor-bot" v-for="item in likedata">
            <router-link :to="'/goods/'+item.OrgID">
                <div class="content">
                    <div class="row">
                        <div class="img">
                            <img src="../../static/temp/4.jpg"/>
                        </div>
                        <div class="detal">
                            <div class="row">
                                <span class="tiger">{{item.OrgBrnd}}</span>
                                <span class="name">{{item.OrgName}}</span>
                            </div>
                            <div class="row">
                                <Vstars :score="item.shop_score" ></Vstars>
                                <span class="score">{{item.SendPrice}}</span>
                                <span class="copies">月销售500份</span>
                                <span class="buluetiger fr">{{item.Distribation}}</span>
                            </div>
                            <div class="row">
                                <span class="rules">{{item.SendPrice}}起送|配送费￥{{item.DeliveryCost}}|{{item.Standard}}/人</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <Vactivity :shopid="item.OrgID"></Vactivity>
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import Vstars from "./Stars.vue"
    import Vactivity from "./Activity.vue"
    export default {
        name:"orglist",
        components:{Vstars:Vstars,Vactivity:Vactivity},
        data () {
        return {
            goods:[],
            activeIndex:0,
            likedata:[],
            shopid:"",
        }
    },
    methods:{
        change(index,big,small){
            this.likedata=[];
            this.$http.post(this.$store.state.IP+"/api/shop/getOrgTypeByType",{"smalltype":small,"bigtype":big}).then(function (res) {
                 this.likedata=res.body;
                    console.log(this.likedata)
            })
            let le=10;
            this.activeIndex=index
            if(index<3||index>(le-3)){
                return
            }else{
                this.menuScroll.scrollTo(-(index-2)*60, 0,300,"circular")
            }

        },
        loadnav(){
            this.$http.post(this.$store.state.IP+"/api/shop/getOrgType",{type:this.type}).then(function (res) {
                this.goods=res.body;
                this.$nextTick(() => {
                    this._initScroll();
                });
            })
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
        this.type=this.$route.params.type
        this.loadnav()
        this.change(0,1,1)
    }
    }

</script>

<style >

</style>