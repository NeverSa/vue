<template>
    <div class="homecontent">
        <div >
            <ul>
                <li><router-link :to="'orglist/'+1"><i class=" iconfont icon-meishi ionic_1"></i><br/>美食</router-link></li>
                <li><a><i class="iconfont icon-tehui ionic_2"></i><br/>甜品饮品</a></li>
                <li><a><i class="iconfont icon-market ionic_3"></i><br/>超商便利</a></li>
                <li><a><i class="iconfont icon-cantingyuding ionic_4"></i><br/>预定早餐</a></li>
                <li><a><i class="iconfont icon-xgss ionic_5"></i><br/>果蔬生鲜</a></li>
                <li><a><i class="iconfont icon-tehui ionic_6"></i><br/>新店特惠</a></li>
                <li><a><i class="iconfont icon-icon4 ionic_7"></i><br/>准时达</a></li>
                <li><a><i class="iconfont icon-diancan ionic_8"></i><br/>简餐</a></li>
                <div class="cf"></div>
            </ul>
        </div>
        <div class="hr"></div>

        <div class="Recommend">
            <div class="title">推荐商家</div>
            <div class="row bor-bot"    v-for="item in list">
                <router-link :to="{ name: 'foodlist', params: { id: item.OrgId }}">
                    <div class="content">
                        <div class="row" style="padding-bottom: 10px;">
                            <div class="img">
                                <img src="../../static/temp/4.jpg"/>
                            </div>
                            <div class="detal">
                                <div class="row">
                                    <span class="tiger">品牌</span>
                                    <span class="name">{{item.OrgName}}  {{item.ShortAddress}}</span>
                                </div>
                                <div class="row">

                                    <rater  :value="3.5" disabled :max="5"	active-color="#ffc600" :margin="1" :font-size="16"></rater>3.5
                                    <span class="copies">月销售500份</span>
                                    <span class="buluetiger fr" v-if="item.Distribation">{{item.Distribation}}</span>
                                </div>
                                <div class="row">
                                    <span class="rules">￥{{item.SendPrice}}起送<span > | 配送费￥</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <Vactivity :shopid="item.OrgId"></Vactivity>
            </div>
        </div>

    </div>

</template>

<script>
    import Vactivity from "./Activity.vue"
    import { Rater } from 'vux'
    export default {
        components:{Vactivity,Rater},
        data () {
            return {
                list:[],

            }
        },
        created(){
            this.loadedata()
        },
        methods: {
            loadedata () {
                this.$http.post(this.$store.state.IP + "/api/goods/getalllist").then((res)=> {
                    this.list = res.data
                })
            },
        }

    }

</script>
<style>

</style>