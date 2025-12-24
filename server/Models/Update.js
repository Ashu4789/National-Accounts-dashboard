const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    type: {
        type: String,
        enum: ['success', 'warning', 'info', 'trend'],
        default: 'info'
    },
    category: {
        type: String,
        required: true // e.g., 'GDP', 'Inflation'
    },
    value: {
        type: String
    },
    change: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Update', updateSchema);
