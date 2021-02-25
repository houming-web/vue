const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const xlSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    enable:{
        type:String,
        default:'Y'
    },
    date:{
        type:Date,
        default:Date.now()
    },
},{
    collection:'king'
});
module.exports=xlSchema;