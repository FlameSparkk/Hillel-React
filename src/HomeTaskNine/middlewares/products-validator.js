module.exports = (req, res, next) => {
    const product = req.body;
    if (product.quantity && product.price && product.description && product.sale && product.photoUrl) {
        if (product.sale.toLowerCase() === 'true' || product.sale.toLowerCase() === 'false') {
            product.sale = product.sale.toLowerCase();
            return next();
        }
        else {
            res.status(400).send({
                error: 'SALE MUST BE TRUE OR FALSE'
            })
        }
    }
    else {
        res.status(400).send({
            error: 'Missing required data'
        })
    }
};