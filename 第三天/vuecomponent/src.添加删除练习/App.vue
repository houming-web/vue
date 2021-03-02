

<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Addconment :addconments='addconments'  />
      <ConmentList    :conments="conments"  :delconments='delconments' />
    </div>
  </div>
</template>

<script>
import Addconment from './views/Addconment'
import ConmentList from './views/ConmentList'
export default {
    name:'App',
    data(){
        return {
            conments:[
                {
                    id:0,
                    name:'老刘',
                    say:'vue真香'
                },
                {
                    id:1,
                    name:'老赵',
                    say:'react是什么,我只用vue'
                },
            ]
        }
    },
    methods:{
        addconments(conments ){
            this.conments.push({...conments,id:Date.now()})
        },
        delconments(id){
          if(confirm(`你确定要删除${this.conments.name}的信息吗?`)){
           this.conments= this.conments.filter(item=>item.id!==id)
          }
        }
    },
    components:{
        Addconment,
        ConmentList
    }
}
</script>

<style >

</style>