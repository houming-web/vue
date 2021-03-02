<template>
    <div>
        <slot name="C"  :num='num'  ></slot>
        <slot name="C1"  :num='num' ></slot>
    </div>
</template>

<script>
export default {
    name:'C',

    data(){
        return {
            num:0
        }
    }
}
</script>

<style>

</style>