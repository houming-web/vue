const mongoose=require('mongoose');
const schema=require('../schema/schema')
const model=mongoose.model('king',schema);
module.exports=model;