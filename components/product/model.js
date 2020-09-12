const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const mySchema = new Schema({
  name:{
    type:String,
    required:true, 
  },
  price:{
    type:mongoose.Decimal128,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  url_image:{
    type:String,
    required:false
  },
  createdDate:Date,
});
const model = mongoose.model('Product',mySchema);
module.exports = model;


const product = {
	"product":{
		"name":"Laptop Macbook Pro",
    "price":225.2,
    "description":"Macbook Pro Apple 15\" RAM16GB SSD 1TB",
		"url_image":"https://images-na.ssl-images-amazon.com/images/I/71i49M4hv2L._AC_SX679_.jpg"
	} 
}