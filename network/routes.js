const express = require('express');
// Import Network Components
const product = require('../components/product/network');

const routes= function (app) {
  // Mounting de Router App!
  app.use('/product',product); // Mount the router on App por  Messages Component
}
module.exports = routes;