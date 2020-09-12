const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');



const Schema =  new mongoose.Schema({
    name:{
      type:String,
      required:false, 
    },
    price:{
      type:Number,
      required:false
    },
    description:{
      type:String,
      required:false
    },
    url_image:{
      type:String,
      required:false
    },
    date:Date,
    subDocument: {
      subDate: {
          type: Date,
      },
  },
}); 

Schema.plugin(timeZone, { paths: ['created_date', 'subDocument.subDate'] });
const model = mongoose.model('Product',Schema);
module.exports = model;


