<template>
  <div>
      child...
      <button @click="adds"  >按钮</button>
      <button @click="addref"  >ref按钮</button>
  </div>
</template>

<script>
export default {
name:'child',
methods:{
    adds(){
        // this.$listeners.add()
        this.$emit('adds')
    },
addref(){
    this.$emit('add')
},
},


}
</script>

<style>

</style>