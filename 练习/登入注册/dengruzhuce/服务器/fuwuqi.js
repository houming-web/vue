(async function(){
    const express=require('express');
    const db=require('../mongooes.x/db/db');
   
    const router1=require('../routerX/ui')
    const router=require('../routerX/dengru')
 
    try{
        const app=express();
        await db;
        console.log('数据连接成功');

        app.use(express.static('../publit'))

        app.use(express.urlencoded({extended:true}))

        app.use(router1)

        app.set('view engine','ejs')

        app.set('views','../views')

        app.use(router)



        app.listen(5003,(err)=>{
            if(err)console.log('服务器连接失败',err) 
            else console.log('服务器连接成功')
        })   
  

    }catch(error){ 
        console.log(error);
    }   
})() 
