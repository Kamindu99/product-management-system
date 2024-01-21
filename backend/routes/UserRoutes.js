const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')

router.post("/", async (req, res) => {
    const user = new User(req.body);
    try {
        const saveduser = await user.save();
        res.json(saveduser);
    } catch (err) {
        res.json({ message: err });
    }
})

router.route("/").get((req, res) => {
    User.find().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;