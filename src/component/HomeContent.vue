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
        <div class="row bor-bot">
          <div class="content">
            <div class="row">
              <div class="img">
                <img src="../../static/temp/4.jpg"/>
              </div>
              <div class="detal">
                <div class="row">
                  <span class="tiger">品牌</span>
                  <span class="name">台资味（杭州未来科技城店面）</span>
                </div>
                <div class="row">
                  <span class="start">asdadad</span>
                  <span class="score">4.7</span>
                  <span class="copies">月销售500份</span>
                  <span class="buluetiger fr">蜂鸟专送</span>
                </div>
                <div class="row">
                  <span class="rules">20起送|配送费￥4|￥23元/人</span>
                </div>
              </div>
            </div>
          </div>
          <div class="activity">
            <div class="row">
              <div class="list fl">
                <div ><span class="tag1 tag">新</span><span>新用户慢件</span></div>
                <div ><span class="tag2 tag">新</span><span>新用户慢件</span></div>
              </div>
              <div class="more fl">
                多个活动
              </div>
            </div>
          </div>
        </div>
        <div class="row bor-bot">
          <div class="content">
            <div class="row">
              <div class="img">
                <img src="../../static/temp/4.jpg"/>
              </div>
              <div class="detal">
                <div class="row">
                  <span class="tiger">品牌</span>
                  <span class="name">台资味（杭州未来科技城店面）</span>
                </div>
                <div class="row">
                  <span class="start">asdadad</span>
                  <span class="score">4.7</span>
                  <span class="copies">月销售500份</span>
                  <span class="buluetiger fr">蜂鸟专送</span>
                </div>
                <div class="row">
                  <span class="rules">20起送|配送费￥4|￥23元/人</span>
                </div>
              </div>
            </div>
          </div>
          <div class="activity">
            <div class="row">
              <div class="list fl">
                <div ><span class="tag1 tag">新</span><span>新用户慢件</span></div>
                <div ><span class="tag2 tag">新</span><span>新用户慢件</span></div>
              </div>
              <div class="more fl">
                多个活动
              </div>
            </div>
          </div>
        </div>
        <div class="row bor-bot">
          <div class="content">
            <div class="row">
              <div class="img">
                <img src="../../static/temp/4.jpg"/>
              </div>
              <div class="detal">
                <div class="row">
                  <span class="tiger">品牌</span>
                  <span class="name">台资味（杭州未来科技城店面）</span>
                </div>
                <div class="row">
                  <span class="start">asdadad</span>
                  <span class="score">4.7</span>
                  <span class="copies">月销售500份</span>
                  <span class="buluetiger fr">蜂鸟专送</span>
                </div>
                <div class="row">
                  <span class="rules">20起送|配送费￥4|￥23元/人</span>
                </div>
              </div>
            </div>
          </div>
          <div class="activity">
            <div class="row">
              <div class="list fl">
                <div ><span class="tag1 tag">新</span><span>新用户慢件</span></div>
                <div ><span class="tag2 tag">新</span><span>新用户慢件</span></div>
              </div>
              <div class="more fl">
                多个活动
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


</template>

<script>
    export default {
        name:"homecontent",
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
                this.$http.post("http://localhost:3000/api/getfoodlist").then(function (res) {
                    this.likedata=res.body
                  console.log(this.likedata)
                })
            }
        }
    }
</script>
<style>

</style>
