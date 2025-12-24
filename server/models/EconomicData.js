const mongoose = require('mongoose');

const economicDataSchema = new mongoose.Schema({
    // We will store the entire "currentStats" object structure here for simplicity
    // allowing flexible updates to any part of the dashboard stats
    section: {
        type: String,
        required: true,
        unique: true,
        default: 'dashboard-summary'
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    data: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('EconomicData', economicDataSchema);
