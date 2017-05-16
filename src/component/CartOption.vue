<template>
    <div class="caroption">
        <a @click="add(-1)"><i>-</i></a>
        <span>22</span>
        <a @click="add(1)"><i>+</i></a>
    </div>
</template>

<script>
    export default {
        props:[
            "fooditem"
        ],
        data () {
            return {}
        },

        methods: {
            add(cont){
               alert(cont)
            }
        },
        created(){
            console.log(this.fooditem)
        }

    }
</script>
<style lang="less">
.caroption{

}
</style>