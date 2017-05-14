<template>
    <div class="homecontent">
        <div >
            <ul>
                <li><a><i class=" iconfont icon-weibiaoti-1-01 ionic_1"></i><br/>美食</a></li>
                <li><a><i class="iconfont icon-tianpin ionic_2"></i><br/>甜品饮品</a></li>
                <li><a><i class="iconfont icon-shangdian ionic_3"></i><br/>超商便利</a></li>
                <li><a><i class="iconfont icon-zaocan ionic_4"></i><br/>预定早餐</a></li>
                <li><a><i class="iconfont icon-shucai ionic_5"></i><br/>果蔬生鲜</a></li>
                <li><a><i class="iconfont icon-weibiaoti-zhuanhuan ionic_6"></i><br/>新店特惠</a></li>
                <li><a><i class="iconfont icon-songhuo ionic_7"></i><br/>准时达</a></li>
                <li><a><i class="iconfont icon-canyin ionic_8"></i><br/>简餐</a></li>
                <div class="cf"></div>
            </ul>
        </div>
        <div class="hr"></div>

      <div class="Recommend">
        <div class="title">推荐商家</div>
        <div class="row bor-bot" v-for="item in likedata">
           <router-link :to="'goods/'+item.shop_id">
          <div class="content">
            <div class="row">
              <div class="img">
                <img src="../../static/temp/4.jpg"/>
              </div>
              <div class="detal">
                <div class="row">
                  <span class="tiger">{{item.shop_brand}}</span>
                  <span class="name">{{item.shop_name}}</span>
                </div>
                <div class="row">
                    <Vstars :score="item.shop_score" ></Vstars>
                    <span class="score">{{item.shop_score}}</span>
                  <span class="copies">月销售500份</span>
                  <span class="buluetiger fr">{{item.shop_delivery}}</span>
                </div>
                <div class="row">
                  <span class="rules">{{item.shop_uptosend}}起送|配送费￥{{item.shop_deliveryprice}}</span>
                </div>
              </div>
            </div>
          </div>
           </router-link>
           <Vactivity :shopid="item.shop_id"></Vactivity>

        </div>
      </div>

    </div>


</template>

<script type="text/ecmascript-6">
    import Vstars from "./Stars.vue"
    import Vactivity from "./Activity.vue"
    export default {
        name:"homecontent",
        components:{Vstars:Vstars,Vactivity:Vactivity},
        data () {
            return {
                likedata:[]
            }
        },
        created: function () {
            this.Loadlikelist()
        },
        methods: {
            Loadlikelist:function () {
                this.$http.post("http://localhost:3000/api/shop/getshoplist").then(function (res) {
                    this.likedata=res.body
                })
            }
        }
    }
</script>
<style>

</style>
