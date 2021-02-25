const fs=require('fs');
const du=fs.createReadStream('./text.txt');
du.on('data',(data)=>{
    xie.write(data)
});

const xie=fs.createWriteStream('./text1.txt');
xie.on('open',()=>{
console.log('可写流开启')
});
xie.on('close',()=>{
console.log('可写流关闭')
});
du.on('open',()=>{
    console.log('可写读开启')
});
du.on('close',()=>{
    console.log('可写读关闭')
    xie.end()
})