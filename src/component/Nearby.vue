<template>
    <div>
      <Vtopbar class="topbargry"></Vtopbar>
      <ul class="nearby">
        <li v-for="(item,index) in nav" v-bind:class="{'active':active==index}">
          <a @click="changeSerch(item.type,index)" >{{item.name}}</a>
        </li>
      </ul>
       <div class="cf"></div>
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
  import Vtopbar from "./TopBar.vue";
    export default {
      name:"nearby",
      components:{Vtopbar:Vtopbar},
        data () {
            return {
              nav:{},
              active:0,
              likedata:[]
            }
        },
      created:function(){
          this.LoadNav()
          this.Loadlikelist()
      },
        methods: {
          LoadNav:function () {
             this.$http.post("http://localhost:3000/api/getnavtype").then(function (res) {
               this.nav=res.body
             })
          },
          changeSerch:function (type,index) {
            this.active=index
            //console.log(type+""+index)
          },
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
