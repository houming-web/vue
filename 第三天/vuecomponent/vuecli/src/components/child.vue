<template>
  <div>
      child
      <button>child按钮 </button>
  </div>
</template>

<script>
export default {
name:'Child',

 mounted(){
        this.$glober.$on('apptochild',this.app)
    },
methods:{
    app(){
        console.log('app触发')
    }
}
}
</script>

<style>

</style>