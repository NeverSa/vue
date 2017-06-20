<template>
    <div class="activity">
        <div class="row">
            <div class="list fl">
                <div v-show="index<2||more" v-for="(item,index) in activity"><span class="tag1 tag">{{item.ActiveType}}</span><span>{{item.ActiveDes}}</span></div>
            </div>
            <div class="more fr">
               <a @click="tager()" v-if="activity.length">{{activity.length}}多个活动</a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'Vactivity',
        props:["shopid"],
        data(){
        return {
           activity:[],
            more:false
        }
    },
    methods:{
     _inti(){
            this.$http.post(this.$store.state.IP+"/api/shop/getactivity",{"id":this.shopid}).then((res)=>{
                this.activity=res.body
            })
        },
        tager(){
            this.more=!this.more;
        }
    },
    created(){
     this._inti()
    }
    }

</script>

<style >

</style>