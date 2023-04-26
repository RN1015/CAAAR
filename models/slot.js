const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true
  },

  booking: [{
    place_name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    guide:{
        type:String,
        required:true
    },
    agency:{
        type:String,
        required:true
    },
    hotel:{
        type:String,
        required:true
    },

  }]
},{ timestamps: true })

const Slot = mongoose.model('slot',slotSchema);
module.exports = Slot;