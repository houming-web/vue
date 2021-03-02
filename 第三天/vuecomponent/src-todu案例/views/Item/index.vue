<template>
      <li  @mouseenter="isshow=true"  @mouseleave="isshow=false "  >
          <label>
            <input type="checkbox"  v-model="isdone" />
            <span>{{item.doing}}</span>
          </label>
          <button class="btn btn-danger" v-show="isshow" @click="shanchu">删除</button>
        </li>
        <!-- <li>
          <label>
            <input type="checkbox"/>
            <span>yyyy</span>
          </label>
          <button class="btn btn-danger" style="display:none">删除</button>
        </li> -->
</template>

<script>
export default {
     name:'Item',
     data(){
       return {
         isshow:false
       }
     },
     
     props:['item','addshanchu','additem'],

     methods:{
       shanchu(){
         if(confirm(`你确定要删除${this.item.doing}吗`)){
         this.addshanchu(this.item.id)}
       }
     },
     computed:{
       isdone:{
         get(){
           return this.item.isdone
         },
         set(){
           this.additem(this.item.id)
         }
       }
     }

     
}
</script>

<style >
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>