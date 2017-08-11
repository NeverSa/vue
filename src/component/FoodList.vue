<template>
    <div style="height:100%;display: flex;flex-direction: column">
        <div class="default-header">
          <div class="herder-back">
              <i class="iconfont icon-xingxing" style="color: #fff;"></i>
            <!--  <span style="margin-left: 20px;">餐厅1</span>-->
          </div>
           <div style="display: flex;flex-direction: row;" class="herder-content" :class="{'herder-active':Y>200}">
               <div>
                   <img src="../assets/images/login-bg.png" style="max-width: 80px;max-height: 80px;" />
               </div>
               <div class="item">
                   <div style="font-size: 22px;">安静的卡里的</div>
                   <div>欢迎光临，这里是公告</div>
                   <div><span class="tiger">品牌</span><span class="buluetiger" style="margin-left: 5px;vertical-align: top">蜂鸟专送</span></div>
               </div>
           </div>
        </div>
        <Vactivity shopid="ad302ec5-a3f1-40e4-b71d-29ff0bc060cf"></Vactivity>
        <div>
            <tab active-color="#2395ff">
                <tab-item selected @on-item-click="onItemClick">商品</tab-item>
                <tab-item @on-item-click="onItemClick">评价</tab-item>

            </tab>
         </div>

        <div style="flex:1;overflow-x: hidden"  ref="foodWrapper" class="foodWrapper">
            <div>
                <div class="shop" v-show="tabindex==0">
                     <div class="left-meun"></div>
                    <div class="right-content"></div>
                </div>
                <div class="discuss" v-show="tabindex==1">
                   adadlad,
                </div>
            </div>

        </div>
        <div>qweqeq</div>

    </div>
</template>

<script>
    import Vactivity from "./Activity.vue"
    import BScroll from 'better-scroll';
    import { ViewBox,Tabbar,Tab, TabItem} from 'vux'
    export default {
        Props:[],
        components:{ViewBox,Tabbar,Vactivity,Tab, TabItem },
        data () {
            return {
                Y:0,
                tabindex:0,

            }
        },

        methods: {
            _initScroll(){
                this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                    probeType: 3,
                    click: true
                });
            },
            onItemClick(index){
                this.tabindex=index
            },

        },
        created(){
            window.onscroll=function () {
                console.log(this)
            }

            this.$nextTick(() => {
                this._initScroll();
                this.foodScroll.on('scroll', (pos) => {
                    this.Y=Math.abs(pos.y)
                    console.log(this.Y)
                })
            });
        }
    }
</script>
<style>
    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    .activitylist{
        margin: 20px 10px 0 10px;
        border-top: none;
        padding: 0px; ;
    }
</style>