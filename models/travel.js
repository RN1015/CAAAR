const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelSchema = new Schema({
  agencyname:{
    type: String,
    required: true
  },
  ownername:{
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
  transporttype:{
    type:String,
    required:true
  },
},{ timestamps: true })

const Travel = mongoose.model('travel',travelSchema);
module.exports = Travel;