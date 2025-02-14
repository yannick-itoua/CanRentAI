const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price:{type: number,required:true},
  date:{type:date,default:Date.now},
  rating:{type:number,required:true},

  
}, { timestamps: true });

module.exports = mongoose.model('User', ListingSchema);
