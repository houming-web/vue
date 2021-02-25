const express=require('express')
const app=express()

app.use(express.static('publit'))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post('/HM',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(5001,(err)=>{
    if(err)console.log(err)
    else console.log('服务器启动成功')
}) 