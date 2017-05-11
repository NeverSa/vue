<template>
    <div>
      <div class="defaulttitle">
          <span class="title">我的订单</span>
          <a class="option">全部订单<i class="icon iconfont icon-emoji"></i></a>
      </div>
      <ul class="orderioncnav">
        <li>
         <a><i class="icon iconfont icon-emoji"></i><br/>代付款</a>
        </li>
        <li>
          <a><i class="icon iconfont icon-emoji"></i><br/>代付款</a>
        </li>
        <li>
          <a><i class="icon iconfont icon-emoji"></i><br/>代付款</a>
        </li>
        <li>
          <a><i class="icon iconfont icon-emoji"></i><br/>代付款</a>
        </li>
      </ul>
      <div class="cf"></div>
      <div class="hr"></div>

      <div class="defaulttitle">
        <span class="title">我的收藏</span>
        <a class="option">查看全部<i class="icon iconfont icon-emoji"></i></a>
      </div>

      <div class="like">
        <div class="likecontent" v-for="item in likedata">
          <div class="imgc">
            <img src="../../static/temp/4.jpg" />
          </div>
          <div class="discription">
            <div class="name">{{item.name}}</div>
            <div class="text-gray">{{item.comboname}}</div>
            <div class="text-bulue">￥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              likedata:[]
            }
        },
        created:function () {
           this.Loadlikelist()
        },
        methods: {
          Loadlikelist:function () {
            this.$http.post("http://localhost:3000/api/getfoodlist").then(function (res) {
              this.likedata=res.body
            })
          }
        }

    }
</script>
<style>

</style>
