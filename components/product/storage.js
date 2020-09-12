// Connection For DB 
const model = require('./model');
const moment = require('moment');
// const { find, findByIdAndRemove } = require('./model');



/* -------------------------------------------------------------------------- */
/*                      get Products and Filtered Product                      */
/* -------------------------------------------------------------------------- */

async function getProducts(filterProduct) {
  try {
    let filter = {};
    if(filterProduct!==null){
      filter = {
        _id:filterProduct
      };
      const products = await model.find(filter);
      return products;
  
    }
    else{
      const products = await model.find();
      return products;
    }
  } catch (error) {
    throw new Error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                                Add Product                                */
/* -------------------------------------------------------------------------- */

function addProduct(product) {
  const myProduct = new model({
    ...product,
    "date":moment()
  });
  return myProduct.save();
}

/* -------------------------------------------------------------------------- */
/*                               Update Product                               */
/* -------------------------------------------------------------------------- */
async function updateProduct(id,product) {
  try {     
     let newProduct = await model.findByIdAndUpdate(id,product,{
       new:true
     });
     return newProduct;
  } catch (error) {
    return error;
  }
}

/* -------------------------------------------------------------------------- */
/*                               Delete Product                               */
/* -------------------------------------------------------------------------- */

async function deleteProduct(id) {
  try {
    return await model.findByIdAndRemove({_id:id});
  } catch (error) {
    console.log (error);
  }
}
module.exports = {
  list: getProducts,
  add:addProduct,
  update:updateProduct,
  remove:deleteProduct,
}


// const updatedMessage = await Message.findOneAndUpdate(
//   { _id: id },
//   { message },
//   { new: true }
// )
