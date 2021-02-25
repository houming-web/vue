const mongoose=require('mongoose');
const zhaogou = require('../schemas');
const Model=mongoose.model('zhougou',zhaogou);
module.exports=Model;