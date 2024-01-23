const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken');

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

router.route("/login").post((req, res) => {
    User.find({ userName: req.body.userName, password: req.body.password }).then((users) => {

        if (users.length > 0) {

            const data = { id: users[0].id, firstName: users[0].firstName, lastName: users[0].lastName }
            const token = jwt.sign(data, 'abcd1234')

            res.json({
                success: true,
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                token: token
            });

        } else {
            res.json({ success: false, message: "Invalid Username or Password" });
        }

    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;