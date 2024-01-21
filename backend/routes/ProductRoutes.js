const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel')

router.post("/add", async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get("/", async (req, res) => {
    //hahahahahha
})

module.exports = router;