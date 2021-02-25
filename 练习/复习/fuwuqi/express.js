const express =require('express')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('文件夹'))
app.get('./文件名',(req,res)=>{
    res.send('')
})
app.post('./文件名',(req,res)=>{
    res.send()
})
app.listen(5000,(err)=>{
    if(err)console.log(err)
    else console.log('服务器搭建错误')
})
