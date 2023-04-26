const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hotelname:{
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
  totalrooms:{
    type:Number,
    required:true
  },
},{ timestamps: true })

const Hotel = mongoose.model('hotel',hotelSchema);
module.exports = Hotel;