<template>
<div>
    <A>
      <div  >AAAAAAA</div>
  </A>


    <B>
        <template  slot="B"  >
             <div>BBBBBB</div>
        </template>
        
  </B>
  
  
  
<C>
        <template v-slot:C="{num}"   >
            <div>CCCCCC</div>
            <p> {{num}} </p>
        </template>

        <template  #C1="{num}"  >
            <div>{{num}} </div>
        </template>
  </C>
  
  
</div>
  

</template>

<script>
import A from './A'
import B from './B'
import C from './C'

export default {
name:'App',
components:{
    A,B,C
}
}
</script>

<style>

</style>