const { Model } = require('mongoose');
const storage = require('./storage');


/* -------------------------------------------------------------------------- */
/*                                Get Products                                */
/* -------------------------------------------------------------------------- */

function  getProducts(filterProduct) {
  return new Promise(async (resolve,reject)=>{
    try {
      resolve(await storage.list(filterProduct));
    } catch (error) {
      reject(error);
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                                 Add Product                                */
/* -------------------------------------------------------------------------- */

function addProduct(product) {
  return new Promise(async (resolve,reject)=>{
    try {
      if(!product){
        return reject('Invalid Composition');
      }
      let savedProduct = await storage.add(product);
      resolve(savedProduct);
    } catch (error) {
       return reject(error);
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                               Update Product                               */
/* -------------------------------------------------------------------------- */
function updateProduct(id,product) {
  return new Promise(async (resolve,reject)=>{
    try {
      if(!id && product){
        return reject('Invalid Composition for Product');
      }
      // console.log(id);
      // console.log(product);
      let updatedProduct = await storage.update(id,product);
      resolve(updatedProduct);

    } catch (error) {
       return reject(error);
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                               Delete Product                               */
/* -------------------------------------------------------------------------- */
function deleteProduct(id) {
  return new Promise(async (resolve,reject)=>{
    try {
      if(!id){
        return reject('Invalid Composition for Product');
      }    
      let deletedProduct = await storage.remove(id);
      resolve("deleted Product");
    } catch (error) {
       reject(error);
    }
  })
}



module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}