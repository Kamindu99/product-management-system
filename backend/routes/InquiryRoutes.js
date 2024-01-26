const express = require('express');
const router = express.Router();
const Inquiry = require('../models/InquiryModel')

router.post("/", async (req, res) => {
    const inquiry = new Inquiry(req.body);
    try {
        const savedInquiry = await inquiry.save();
        res.json(
            {
                success: true,
                message: "Successfully Created",
                inquiry: savedInquiry
            }
        );
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;