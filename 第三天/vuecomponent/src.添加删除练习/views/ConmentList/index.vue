<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2  v-if="!conments.length" >暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
         <ConmentItem  v-for='conment in conments' :conment='conment' :delconments='delconments'   :key="conment.id" />
        </ul>
      </div>
</template>
<script>
import ConmentItem from '../ConmentItem'
export default {
    name:'ConmentList',

    props:['conments','delconments'],
    components:{
      ConmentItem,
    }
}
</script>

<style >
.reply {
  margin-top: 0px;
}

</style>