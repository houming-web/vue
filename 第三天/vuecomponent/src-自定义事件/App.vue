<template>
<div>
    <div>app...</div>
    <p>  {{num}} </p>
    <child @adds='add'  ref="add"  ></child>
    </div>
  
</template>

<script>
import child from './Chlik'
export default {
    name:'App',
    data(){
        return {
            num:0
        }
    },
    methods:{
        add(){
            this.num++
        }
    },
   mounted(){
        console.log(this.$refs)
    this.$refs.add.$on('add',this.add)
    },
    components:{
        child
    },
    beforeDestroy(){
        this.$refs.child.$off('add',this.add)
    }
}
</script>

<style>

</style>