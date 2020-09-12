const storage = require('./storage');


/* -------------------------------------------------------------------------- */
/*                                Get Products                                */
/* -------------------------------------------------------------------------- */

function  getProducts(filterProduct) {
  return new Promise(async (resolve,reject)=>{
    try {
      resolve(await storage.list(filterProduct));
    } catch (error) {
      return reject(error);
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

module.exports = {
  getProducts,
  addProduct,
}