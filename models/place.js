const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
},{ timestamps: true })

const Place = mongoose.model('place',placeSchema);
module.exports = Place;