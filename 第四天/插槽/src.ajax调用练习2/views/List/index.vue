<template>
  <div class="row">
    <h2 v-if="isshowtext"  >请输入用户名</h2>
    <p  v-else-if="isload"  >Loading....</p>


      <div class="card"  v-for="use in user "  :key="use.id"   v-else   >
        <a :href="use.html_url" target="_blank">
          <img :src="use.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{use.login}}</p>
      </div>
      <!-- <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'List',
    data(){
        return {
            isshowtext:true,
            isload:false,
            user:[]
        }
    },
    mounted(){
        this.$bus.$on('addUser',this.addUser)
    },
    methods:{
        addUser(name){
            if(name===''){
                alert('输入值不能为空');
                return
            }

            this.isshowtext=false,
            this.isload=true,
            axios
            // .get(`https://api.github.com/search/users?q=${name}`)
            //  .get(`http://localhost:9527/search/users?q=${name}`)
            //  .get(`http://localhost:8080/search/users?q=${name}`)
             .get(`/api/search/users?q=${name}`)
                 .then((res)=>{
                     this.isload=false
                    this.user=  res.data.items.map(user=>{
                         return {
                            id: user.id,
                            login: user.login,
                            avatar_url: user.avatar_url,
                            html_url: user.html_url
                         }
                     })
                 })
                 .catch((erroy)=>{
                     if(erroy.message==='Network Error'){
                         alert('请连接网络')
                     }
                 })
        }
    }
}
</script>

<style>

</style>