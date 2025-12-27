const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a report title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    category: {
        type: String,
        required: true,
        enum: ['GDP', 'Inflation', 'Fiscal', 'Trade', 'Employment', 'Banking', 'Agriculture', 'State GDP', 'General', 'Other']
    },
    type: {
        type: String,
        enum: ['generated', 'uploaded'],
        default: 'generated'
    },
    reportId: {
        type: String,
        // For generated reports: 'gdp', 'inflation', etc.
        // For uploaded reports: null
    },
    fileUrl: {
        type: String,
        // For uploaded reports: path to file
        // For generated reports: null
    },
    fileName: {
        type: String
        // Original filename for uploaded files
    },
    fileType: {
        type: String,
        enum: ['pdf', 'excel', 'csv'],
        default: 'pdf'
    },
    size: {
        type: String,
        // Human-readable size like "2.4 MB"
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        // Only for uploaded reports
    },
    isActive: {
        type: Boolean,
        default: true
    },
    downloadCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Report', reportSchema);
