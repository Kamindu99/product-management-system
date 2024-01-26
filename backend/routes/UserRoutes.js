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

router.route("/login").post(async (req, res) => {
    try {
        const users = await User.find({ userName: req.body.userName, password: req.body.password });

        if (users.length > 0) {
            const data = { id: users[0].id, firstName: users[0].firstName, lastName: users[0].lastName };
            const accessToken = jwt.sign(data, 'abcd1234', { expiresIn: '1h' });
            const refreshToken = jwt.sign(data, '1234abcd', { expiresIn: '24h' });

            await User.findOneAndUpdate({ _id: users[0]._id }, { $set: { refreshToken: refreshToken } });

            res.json({
                success: true,
                id: users[0].id,
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                accessToken: accessToken,
                refreshToken: refreshToken
            });
        } else {
            res.json({ success: false, message: "Invalid Username or Password" });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "An error occurred during login" });
    }
});

router.route("/refresh").post((req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) return res.sendStatus(401)
    jwt.verify(refreshToken, '1234abcd', (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({ id: user.id, firstName: user.firstName, lastName: user.lastName }, 'abcd1234', { expiresIn: '20s' })
        res.json({ accessToken: accessToken })
    })
})

router.route("/logout").post(async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) return res.sendStatus(401);

    try {
        const decodedUser = jwt.verify(refreshToken, '1234abcd');
        const user = await User.findOne({ _id: decodedUser.id });

        if (user) {
            if (user.refreshToken == null || user.refreshToken == '') {
                return res.status(403).json({
                    message: "User already logged out. Invalid Refresh Token"
                })
            }
            else {
                if (refreshToken === user.refreshToken) {
                    user.refreshToken = null;
                    await user.save();

                    res.json({ success: true, message: "Logged Out" });
                } else {
                    return res.status(403).json({
                        message: "Invalid Refresh Token"
                    })
                }
            }
        } else {
            return res.status(403).json({
                message: "Invalid Refresh Token"
            })
        }
    } catch (err) {
        res.sendStatus(403);
    }
});

router.route("/:id").get((req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/get").post(async (req, res) => {
    const token = req.body.token;
    if (token == null) return res.sendStatus(401);

    try {
        const decodedUser = jwt.verify(token, '1234abcd');
        const user = await User.findOne({ _id: decodedUser.id });

        if (user) {
            if (user.refreshToken == null || user.refreshToken == '') {
                return res.status(403).json({
                    message: "User already logged out. Invalid Refresh Token"
                })
            }
            else {
                if (token === user.refreshToken) {
                    res.json({ success: true, user: user });
                } else {
                    return res.status(403).json({
                        message: "Invalid Refresh Token"
                    })
                }
            }
        } else {
            return res.status(403).json({
                message: "Invalid Refresh Token"
            })
        }
    } catch (err) {
        res.sendStatus(403);
    }
});

router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id).then(() => {
        res.json("User Deleted");
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").post((req, res) => {
    User.findById(req.params.id).then((user) => {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.userName = req.body.userName;
        user.password = req.body.password;
        user.save().then(() => {
            res.json("User Updated");
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;