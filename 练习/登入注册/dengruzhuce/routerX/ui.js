const express=require('express');
const router=express.Router();
const path=require('path')
router.get('/zhuce',(req,res)=>{
    const url=path.resolve(__dirname,'../publit/zhuce.html')
    res.sendFile(url)
});
router.get('/dengru',(req,res)=>{
    const url1=path.resolve(__dirname,'../publit/dengru.html')
    res.sendFile(url1)
});
router.get('/shouye',(req,res)=>{
    const {name}=req.query
    res.render('shouye',{name})
})
//导出
module.exports=router;