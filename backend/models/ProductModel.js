const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('products', productSchema);