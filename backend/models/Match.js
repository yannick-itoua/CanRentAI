const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  listing: { type: String, required: true },
  price:{type: number,required:true},

  
}, { timestamps: true });

module.exports = mongoose.model('User', MatchSchema);
