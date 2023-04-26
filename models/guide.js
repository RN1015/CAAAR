const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guideSchema = new Schema({
  guide_name:{
    type: String,
    required: true
  },
  DOB:{
    type:String,
    required:true
  },
  contact:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  language:{
    type:String,
    required:true
  },
},{ timestamps: true })

const Guide = mongoose.model('guide',guideSchema);
module.exports = Guide;