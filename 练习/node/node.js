function duxie(text,newtext){
    const fs=require('fs');
    const du=fs.createReadStream(text);

    du.on('data',(data)=>{
        xie.write(data)
    })

    const xie=fs.createWriteStream(newtext);
    xie.on('open',(a)=>{
        console.log(a);
        console.log('可写流开启');
    });
    xie.on('close',(a)=>{
        console.log(a);
        console.log('可写流关闭');
    });
    du.on('open',(a)=>{
        console.log(a);
        console.log('可读流开启');
    });
    du.on('close',(a)=>{
        console.log(a);
        console.log('可读流关闭');
        xie.end();
    });
}

duxie('text.txt','text2.txt')