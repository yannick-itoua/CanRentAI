const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price:{type: Number,required:true},
  date:{type:Date,default:Date.now},
  rating:{type:Number,required:true},

  
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);
