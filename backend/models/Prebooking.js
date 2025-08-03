const mongoose = require('mongoose');

const PrebookingSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    wantsDemo: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Prebooking', PrebookingSchema);