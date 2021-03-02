

<template>
<div>
<button @click='num++'  >按钮 </button>
    <p> {{num}}  </p>
</div>
    
</template>

<script>
export default {
    name:'Home',
    data(){
        return {
            num:0
        }
    }
}
</script>

<style scoped>

</style>