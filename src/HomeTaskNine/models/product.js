const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({

    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    sale: {
        type: Boolean,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    }

});

  
const ProductModel = mongoose.model('product', ProductSchema);
  
module.exports = ProductModel;