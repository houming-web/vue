<template>
  <div>
      <p   v-if="isload "   >loading.....  </p>
      <p v-else  >to status to <a :href="html_url"  target="_black" >vue</a>  </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    data(){
        return {
            isload:true,
            html_url:''
        }
    },
    mounted(){
        axios({
            url:'https://api.github.com/search/repositories',
            method:'get',
            params:{
                q:'v',
                sort:'stars'
            }
        }).then((res)=>{
            this.isload=false
            const {html_url}=res.data.items[0]
            this.html_url=html_url
        })
    }
}
</script>

<style>

</style>