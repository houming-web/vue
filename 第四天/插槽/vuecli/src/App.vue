<template>
  <div>
    <el-button type="danger" plain @click="open" >危险按钮</el-button>
  </div>
</template>

<script>
export default {
name:'APP',
 methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>

<style>

</style>