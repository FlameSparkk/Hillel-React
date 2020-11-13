const { Router } = require('express');
const ProductModel = require('../models/product');
const productValidator = require('../middlewares/products-validator');
const idValidator = require('../middlewares/id-validator');

const productRouter = Router();


productRouter.get('/',  async (req, res) => {
    const products = await ProductModel.find({});
    res.send(products);
});

productRouter.get('/:productId',idValidator, async (req, res) => {
    const product = await ProductModel.findById(req.params.productId);
    res.send(product);
});

productRouter.post('/', productValidator, async (req, res) => {
    const product = new ProductModel(req.body);
    const { _id } = await product.save();
    res.status(201).send({ 
        message: `Successfully created new product, it's id: '${_id}' `
    });
});

productRouter.delete('/:productId', idValidator, async (req, res) => {
    await ProductModel.findByIdAndRemove(req.params.productId);
    res.status(200).send({
        result: `Product with id '${req.params.productId}' deleted successfully `
    });
});

productRouter.put('/:productId', idValidator, productValidator, async (req, res) => {
    const result = await ProductModel.findByIdAndUpdate(req.params.productId, req.body);
    res.status(200).send({
        result,
        message: `Product with id '${req.params.productId}' successfully updated`
    });
  });

module.exports = productRouter;