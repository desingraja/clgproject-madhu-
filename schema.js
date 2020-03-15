var mongoose = require('mongoose');

var tableschema = new mongoose.Schema({

   id:{
       type:Number,unique:true
   },
   Name:{
       type:String
   },
   Email:{
       type:String
   },
   Pwd:{
       type:String
   },
   pincode:{
       type:Number
   },
   contact:{
       type:Number
   }
  
})
module.exports=mongoose.model('signuprecords',tableschema);

// Temporary mail address for this project.
// (jmarcopa@angelasupport.com).
//  pwd : madhu@0000

// Atlas - oshady.ahmed.395l@asistx.net
// pwd - project@123  .

// mongodb+srv://desingraja:desingraja@cluster0-llc8s.mongodb.net/
