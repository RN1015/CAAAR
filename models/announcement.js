const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const announcementSchema = new Schema({

adminannouncement:{
    type: String,
    required: true
  },
},{ timestamps: true })

const Announcement = mongoose.model('announcement',announcementSchema);
module.exports = Announcement;