const http=require('http')
const sever=http.createServer((request,response)=>{
    response.end('laozhao')
})
sever.listen(5000,(err)=>{
    if(err)console.log(err)
    else console.log('服务器连接成功')
})