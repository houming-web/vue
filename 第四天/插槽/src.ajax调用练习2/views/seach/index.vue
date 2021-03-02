<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"  v-model="name"  />
        <button @click="sendname"  >Search</button>
      </div>
    </section>
</template>

<script>
export default {
    name:'Seach',
    data(){
        return {
            name:''
        }
    },
    methods:{
        sendname(){
            
            this.$bus.$emit('addUser',this.name)
        }
    }
}
</script>

<style>

</style>