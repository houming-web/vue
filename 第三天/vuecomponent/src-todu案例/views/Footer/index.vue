<template>
     <div class="todo-footer">
        <label>
          <input type="checkbox"   v-model="quanxuan"  /> 
        </label>
        <span>
          <span>已完成{{reght}}</span> / 全部{{list.length}}
        </span>
        <button class="btn btn-danger" @click='qingchu'  >清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'Footer',
    props:['list','addquanshan'],
    methods:{
      qingchu(){
        if(this.list.every(item=>{
          return !item.isdone
        })){
          return
        }  
        if(confirm(`你确定要删除吗`)){
         this.addquanshan()
        }
       
        
      }
    },
    computed:{
      reght(){
        let num =0
        this.list.forEach(item => {
          if(item.isdone){
            num++
          }
        })
        console.log(num)
        return num
      },
       quanxuan:{
        get(){
           let res=this.list.every(item=>{
            return item.isdone
          })
          if(!this.list.length) {
               res=false
          }
          return res
        },
        set(value){ 
          // if(value){
          //     this.list.forEach(item=>{
          //       item.isdone=true
          //     })
          // }else{
          //    this.list.forEach(item=>{
          //       item.isdone=false
          //     })
          // }

          //  this.list.forEach(item=>{
          //    if(value){
          //       item.isdone=true
          //    }else{
          //      item.isdone=false
          //    }
          //      })

          this.list.forEach(item=>{
                item.isdone=value
               })
       }
    }
}
}
</script>

<style >
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>