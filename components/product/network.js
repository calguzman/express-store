// import express from 'express';
const express = require('express');
const router = express.Router();  
const response = require('../../network/response');
const controller = require('./controller');

// Test http://localhost:3000/example/

/* -------------------------------------------------------------------------- */
/*                             List All Products                             */
/* -------------------------------------------------------------------------- */

router.get('/', async (req, res) => {
  try {
    const filterProduct = req.query.id || null;
    productList= await controller.getProducts(filterProduct); 
    response.success(req,res,productList,200);
  } catch (error) {
    console.error(error);
    response.error(req,res,`Error: Listing Products`,500);
  }
});

/* -------------------------------------------------------------------------- */
/*                                 Add Product                                */
/* -------------------------------------------------------------------------- */

router.post('/', async (req, res) => {
  try {
    let savedProduct = await controller.addProduct(req.body.product);
    response.success(req,res,savedProduct,201);
  } catch (error) {
    response.error(req,res,`Error: Adding Product :${error}`,500);
  }
});

/* -------------------------------------------------------------------------- */
/*                               Update Product                               */
/* -------------------------------------------------------------------------- */

router.patch('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let product = req.body.product;
    let updatedProduct = await controller.updateProduct(id, product);
    response.success(req,res,updatedProduct,200);
  } catch (error) {
    response.error(req,res,`Error: Updating Product:${error}`,500);
  }
});

/* -------------------------------------------------------------------------- */
/*                               Delete Product                               */
/* -------------------------------------------------------------------------- */
router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let deleteProduct = await controller.deleteProduct(id);
    response.success(req,res,deleteProduct,200);
  } catch (error) {
    response.error(req,res,`Error: Removing Product:${error}`,500);
  }
});



module.exports = router;