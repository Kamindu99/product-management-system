const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('inquiries', inquirySchema);