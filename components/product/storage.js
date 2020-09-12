// Connection For DB 
const Model = require('./model');

/* -------------------------------------------------------------------------- */
/*                                Get Products                                */
/* -------------------------------------------------------------------------- */

async function getProducts(filterProduct) {
  let filter = {};
  if(filterProduct!==null){
    filter = {
      user:filterProduct
    };
    const products = await Model.find(filter);
    return products;

  }
  else{
    const products = await Model.find();
    return products;
  }
}

/* -------------------------------------------------------------------------- */
/*                                Add Product                                */
/* -------------------------------------------------------------------------- */

function addProduct(product) {
  const myProduct = new Model(product);
  return myProduct.save();
}
module.exports = {
  list: getProducts,
  add:addProduct,
}
