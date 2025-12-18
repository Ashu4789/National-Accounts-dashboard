const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// @desc    Generate and download report PDF
// @route   GET /api/reports/download/:reportId
// @access  Private
const downloadReport = async (req, res) => {
  try {
    const { reportId } = req.params;

    // Report data (in production, fetch from database)
    const reportData = {
      1: {
        title: 'Annual GDP Report 2024',
        type: 'GDP',
        date: '2024-12-01',
        content: {
          summary: 'The Indian economy showed robust growth in 2024 with GDP expanding by 5.1%.',
          gdp: '3,732.45 Billion USD',
          growth: '5.1%',
          sectors: {
            agriculture: '18.2%',
            industry: '28.6%',
            services: '53.2%'
          }
        }
      },
      2: {
        title: 'Q4 Inflation Analysis',
        type: 'Inflation',
        date: '2024-11-15',
        content: {
          summary: 'Inflation moderated to 4.9% in Q4 2024, within the RBI target range.',
          cpi: '4.9%',
          food: '6.2%',
          core: '3.8%'
        }
      }
      // Add more reports as needed
    };

    const report = reportData[reportId] || reportData[1];

    // Create PDF
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${report.title.replace(/\s+/g, '_')}.pdf"`);

    // Pipe PDF to response
    doc.pipe(res);

    // Header
    doc.fontSize(24)
       .fillColor('#2563eb')
       .text('National Accounts Dashboard', { align: 'center' })
       .moveDown();

    // Title
    doc.fontSize(20)
       .fillColor('#000')
       .text(report.title, { align: 'center' })
       .moveDown();

    // Metadata
    doc.fontSize(12)
       .fillColor('#666')
       .text(`Report Type: ${report.type}`)
       .text(`Date: ${new Date(report.date).toLocaleDateString()}`)
       .text(`Generated: ${new Date().toLocaleString()}`)
       .moveDown(2);

    // Divider
    doc.moveTo(50, doc.y)
       .lineTo(550, doc.y)
       .stroke()
       .moveDown();

    // Content
    doc.fontSize(16)
       .fillColor('#000')
       .text('Executive Summary', { underline: true })
       .moveDown();

    doc.fontSize(12)
       .fillColor('#333')
       .text(report.content.summary, { align: 'justify' })
       .moveDown(2);

    // Key Metrics
    doc.fontSize(16)
       .fillColor('#000')
       .text('Key Metrics', { underline: true })
       .moveDown();

    Object.entries(report.content).forEach(([key, value]) => {
      if (key !== 'summary' && typeof value !== 'object') {
        doc.fontSize(12)
           .fillColor('#2563eb')
           .text(`${key.toUpperCase()}: `, { continued: true })
           .fillColor('#000')
           .text(value)
           .moveDown(0.5);
      }
    });

    // Sectors (if available)
    if (report.content.sectors) {
      doc.moveDown()
         .fontSize(16)
         .fillColor('#000')
         .text('Sectoral Breakdown', { underline: true })
         .moveDown();

      Object.entries(report.content.sectors).forEach(([sector, percentage]) => {
        doc.fontSize(12)
           .fillColor('#2563eb')
           .text(`${sector.charAt(0).toUpperCase() + sector.slice(1)}: `, { continued: true })
           .fillColor('#000')
           .text(percentage)
           .moveDown(0.5);
      });
    }

    // Footer
    doc.moveDown(3)
       .fontSize(10)
       .fillColor('#666')
       .text('National Accounts Dashboard | Ministry of Statistics', { align: 'center' })
       .text('This is an official government report', { align: 'center' });

    // Finalize PDF
    doc.end();

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ message: 'Failed to generate report' });
  }
};

module.exports = {
  downloadReport
};