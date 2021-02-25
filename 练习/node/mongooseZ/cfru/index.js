

(async function(){

    try{
        const db=require('../db');
        await db;
        console.log('数据连接成功');
    
        const Model=require('../models');

        // Model.create({
        //     id:Date.now(),
        //     name:'老赵',
        //     age:1000,
        //     sex:'女'
        // });
        // Model.find({age:1000},{name:1},(err,data)=>{
        //     if(err)console.log('没找到',err)
        //     else console.log('找到了',data)
        // });
        // Model.updateOne({age:1000},{age:2000},(err,data)=>{
        //     if(err)console.log('没改变',err)
        //     else console.log('改变了')
        // });
        Model.deleteOne({age:2000},(err,data)=>{
            if(err)console.log('没改变',err)
            else console.log('改变了')
        })
    }
    catch(error){
        console.log('出错了',error)
    }
   


})()