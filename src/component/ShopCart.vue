<template>
    <div class="shopcart">
        <div class="carionic">
            <span class="car" :class="{'hascart':getCarnumber>0}">
                <span class="tag" v-show="getCarnumber>0">{{getCarnumber}}</span>
                <i class="icon-gouwuche iconfont"></i>
            </span>
        </div>
        <div class="content" :class="{'highlighted':getTotle>upsend}">{{getPrice}}</div>
        <div class="option" :class="{'activeoption':getTotle>upsend}">{{getSend}}</div>
    </div>
</template>

<script>
    export default {
        naem:"shopcart",
        data () {
            return {}
        },
        props:["cartfoods","upsend"],
        methods: {},
        created(){

        },
        computed:{
            getPrice () {
                let totle=0;
                for(var i=0;i<this.cartfoods.length;i++) {
                    for (var j = 0; j < this.cartfoods[i].item.length; j++) {
                        totle+=this.cartfoods[i].item[j].price*this.cartfoods[i].item[j].conts
                    }
                }
                if(totle==0){
                    totle="未选购商品"
                }else if(totle<this.upsend){
                   totle="还差￥"+(this.upsend-totle)+"起送"
                }else {
                    totle="￥"+totle
                }
                return totle
            },
            getTotle(){
                let totle=0;
                for(var i=0;i<this.cartfoods.length;i++) {
                    for (var j = 0; j < this.cartfoods[i].item.length; j++) {
                        totle+=this.cartfoods[i].item[j].price*this.cartfoods[i].item[j].conts
                    }
                }
                return totle
            },
            getSend(){
                let str="￥"+this.upsend+"起送";
                if(this.getTotle>this.upsend){
                    str="去结算"
                }
                return str
            },
            getCarnumber(){
                let num=0;
                for(var i=0;i<this.cartfoods.length;i++) {
                    for (var j = 0; j < this.cartfoods[i].item.length; j++) {
                     if(this.cartfoods[i].item[j].conts!=0){
                         num+=this.cartfoods[i].item[j].conts
                     }
                    }
                }
                return num
            }
        }

    }
</script>
<style>

</style>