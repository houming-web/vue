const express=require('express')
const app=express()

app.use(express.static('publit'))

app.use(express.urlencoded({extended:true}))

app.use(express.json())//将客户端传入的json数据解析出来

app.post('/hm',(req,res)=>{
    console.log(req.body)
    // const re= JSON.stringify(req.body)
    // console.log(re)
    // res.send(re)
    res.send(`${req.body}`)
    // res.send(req.body)
})

app.post('/hou',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(5000,(err)=>{
    if(err)console.log(err)
    else console.log('服务器连接成功')
})