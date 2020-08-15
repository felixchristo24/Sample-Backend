const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const tokenValidation = require('../middleware/tokenVAlidation');

//Add Products

router.post('/add', tokenValidation.tokenValidation, productController.createProduct);
router.get('/get',tokenValidation.tokenValidation, productController.getAllProducts);




module.exports = router;