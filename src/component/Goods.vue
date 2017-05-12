<template>
  <div>
    <div class="header">
        <div class="content-wrapper">
          <div class="avatar">
            <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
          </div>
          <div class="content">
            <div class="title">
              <span class="brand"></span>
              <span class="name">粥品香坊（回龙观）</span>
            </div>
            <div class="description">
              <span class="buluetiger">蜂鸟专送</span>38分钟送达|配送费￥4
            </div>
            <div class="support">
              <span class="text">在线支付满28减5</span>
            </div>
          </div>
          <div class="support-count">
            <div class="row"><span class="fr">4</span></div>
            <ul>
              <li>
                <span class="tag1 tag" >新</span>
                <span>新用户下单送</span>
              </li>
              <li>
                <span class="tag2 tag" >新</span>
                <span>新用户下单送</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="background">
          <img width="100%" height="100%" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
        </div>
    </div>
    <div class="navtab">
      <ul >
        <li @click="selectactive(0)" :class="{'active':active==0}">商品</li>
        <li @click="selectactive(1)" :class="{'active':active==1}">评价（4.7分）</li>
        <div class="cf"></div>
      </ul>
    </div>
    <div  class="good" v-show="active==0">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" class="menu-item border-1px"  :class="{'current':currentIndex === index}"
              @click="selectMenu(index, $event)">
          <span class="text">
           {{item.sallename}}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook">
            <h1 class="title">{{item.sallename}}</h1>
            <ul>
              <li v-for="food in item.item" class="food-item" @click="selectFood(food, $event)">
                <div class="icon">
                  <img src="../../static/temp/4.jpg">
                </div>
                <div class="content">
                  <h2 class="name">{{food.dishesname}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>

      </div>
    </div>
    <div v-show="active==1">
      <div class="discuss row" >
        <div class="score">
          <span class="name">4.7</span><br/>
          <span class="text">综合评分</span><br/>
          <span class="percent">高于周边商家79.7%</span>
        </div>
        <div class="stars">
          <div class="starsitem">
            <span>服务态度</span>
            <span>星星</span>
            <span>分数</span>
          </div>
          <div class="starsitem">
            <span>服务态度</span>
            <span>星星</span>
            <span>分数</span>
          </div>
          <div class="starsitem">
            <span>送达时间</span>
            <span class="text-title">45分钟</span>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="targete">
        <span>asdad</span>
        <span>asdadad</span>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        active:0,
        goods: [],
        listHeight: [],
        scrolly: 0,
        selectedFood: {}
      };
    },
    created() {
      this._index=1;
      console.log(this.$route.params.orgid)
      this.$http.post("http://localhost:3000/api/goods/getlist").then(function (res) {
        this.goods=res.body.Rows;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      })

    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3,
          click: true
        });
        this.foodScroll.on('scroll', (pos) => {
          this.scrolly = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      selectMenu(index, event) {
        if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodScroll.scrollToElement(el, 300);
      },
      selectFood(food, event) {
        if (!event._constructed) {
          return;
        }
       /* this.selectedFood = food;
        this.$refs.food.show();*/
      },
      incrementTotal(target) {
        this.$refs.shopCart.drop(target);
      },
      selectactive(index){
       this.active=index
      }
    },
    components: {

    }
  };
</script>
<style>

</style>
