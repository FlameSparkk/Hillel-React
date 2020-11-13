module.exports = async (req, res, next) => {
    const ProductModel = require('../models/product');
    const product = await ProductModel.findById(req.params.productId);
    if (product === null) {
        res.status(400).send({
            error: `Product ${req.params.productId} does not exists `
        });
    }
    else {
        return next();
    }
};