const express = require('express');
const router = express.Router();
const {
    downloadReport,
    getAllReports,
    uploadReport,
    deleteReport,
    downloadUploadedFile
} = require('../controllers/reportController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Public/Protected routes
router.get('/', getAllReports); // Get all reports (public)
router.get('/download/:reportId', protect, downloadReport); // Download generated report
router.get('/file/:id', protect, downloadUploadedFile); // Download uploaded file

// Admin routes
router.post('/upload', protect, admin, upload.single('file'), uploadReport); // Upload report
router.delete('/:id', protect, admin, deleteReport); // Delete report

module.exports = router;