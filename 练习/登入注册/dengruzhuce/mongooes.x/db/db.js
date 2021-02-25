const momgoose=require('mongoose');
const db=momgoose.connect('mongodb://127.0.0.1:27017/NEW',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true
});
module.exports=db;
