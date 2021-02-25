const express=require('express');
const router=express.Router();
const model=require('../mongooes.x/model/model');
   //注册
   router.post('/zhuce',async (req,res)=>{
    //接收数据
    const { name , password }=req.body;
    console.log(req.body)
    //传输数据
    await model.create({
        name,
        password
    })
    res.send('注册成功')
})

//登入
router.post('/dengru',async (req,res)=>{
    //接收数据
    const { name , password }=req.body;
    console.log(req.body);
    //传输数据
      const quren=await  model.findOne({name:name,password:password});
      console.log(quren.name)
    //判断
    if(quren){
        res.redirect('http://localhost:5003/shouye?name='+quren.name)
    }else{
        res.send('账号或密码错误')
    }
})

//导出
module.exports=router;