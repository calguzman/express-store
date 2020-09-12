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
    productList= await controller.getProducts();
    response.success(req,res,productList,200);
  } catch (error) {
    response.error(req,res,`Error: Obteniendo Lista de Productos:${error}`,500);
  }
});

/* -------------------------------------------------------------------------- */
/*                                 Add Product                                */
/* -------------------------------------------------------------------------- */

router.post('/', async (req, res) => {
  try {
    let product = await controller.addProduct(req.body.product);
    response.success(req,res,product,200);
  } catch (error) {
    response.error(req,res,`Error: Obteniendo Lista de Productos:${error}`,500);
  }
});

module.exports = router;