const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const zhaogou=new Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    sex:{
        type:String,
        default:'男'
    },
    info:{
        type:Schema.Types.Mixed
    },
    Date:{
        type:Date,
        default:Date.now()
    }
},{
    collection:'zhaogou'
});
module.exports=zhaogou;