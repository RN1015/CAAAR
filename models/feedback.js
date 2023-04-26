const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

email:{
  type:String,
  required:true
},
  userfeedback:{
    type: String,
    required: true
  },
},{ timestamps: true })

const Feedback = mongoose.model('feedback',feedbackSchema);
module.exports = Feedback;