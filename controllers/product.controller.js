const baseController = require('./base.controller');
const Product = require('../database/models/product.model')
const constant = require('../constants');

module.exports.createProduct = async (req, res) => {
    let response = { ...constant.serverDefaultResponse }
    try {
        var resData = await baseController.add(req.body, Product);
        response.body = resData;
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_CREATED;
        res.send(response);
    }
    catch (err) {
        response.message = err.message;
    }
}


module.exports.getAllProducts = async (req, res) => {
    let response = { ...constant.serverDefaultResponse }
    try {
        var resData = await baseController.getAll(Product);
        response.body = resData;
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_FETCHED;
        res.send(response);
    }
    catch (err) {
        response.message = err.message;
    }
}