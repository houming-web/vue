<template>
   <div class="container">
       <Seach></Seach>
        <List></List>
  </div>
</template>

<script>
import Seach from './views/seach'
import List from './views/List'
export default {
    name:'App',
    components:{
        Seach,
        List
    }
}
</script>

<style>

</style>