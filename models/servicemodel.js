const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'Service name is required'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);