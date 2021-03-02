

<template>
    <div class="todo-container">
    <div class="todo-wrap">
     <Header :addinput="addinput" />
     <Lister v-show='list.length'  :list="list" :addshanchu='addshanchu' :additem='additem'  />
    <Footer :list="list" :addquanshan='addquanshan' />
    
      
    </div>
  </div>
</template>

<script>
import Header from './views/Header'
import Footer from './views/Footer'
import Lister from './views/Lister'
export default {
    name:'App',
    data(){
        return {
            list:[
                {
                    id:1,
                doing:'足球',
                isdone:true
            },
            {
               id:2,
                doing:'篮球',
                isdone:false
            },
            {
               id:3,
                doing:'羽毛球',
                isdone:false
            },
            ]
        }
    },
    methods:{
      addinput(item){
        this.list.push(item)
      },
      addshanchu(id){
       this.list= this.list.filter(item=>{
          return item.id!==id
        })
      },
      addquanshan(){
        this.list=this.list.filter(item=>{
          return !item.isdone
        })
      },
      additem(id){
       const res= this.list.find(item=>{
          return item.id===id
        })
        res.isdone=!res.isdone
      }
    },
    components:{
        Header,
        Footer,
        Lister
    }
}
</script>

<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}


/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>