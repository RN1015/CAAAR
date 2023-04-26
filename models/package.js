const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  visit:{
    type:String,
    required:true
  },
},{ timestamps: true })

const Package = mongoose.model('package',packageSchema);
module.exports = Package;