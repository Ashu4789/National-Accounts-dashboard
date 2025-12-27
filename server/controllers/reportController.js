const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const Report = require('../models/Report');
const {
  realGDPData,
  realGDPConstant,
  sectoralGDP,
  inflationData,
  fiscalData,
  balanceOfPayments,
  employmentData,
  stateGDP,
  perCapitaIncome,
  bankingData,
  agricultureProduction
} = require('../data/economicData');

// Helper function to format numbers
const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

// Helper function to add a table to PDF
const addTable = (doc, headers, rows, startY) => {
  const tableTop = startY || doc.y;
  const colWidth = 500 / headers.length;
  let currentY = tableTop;

  // Draw headers
  doc.fontSize(10).fillColor('#2563eb');
  headers.forEach((header, i) => {
    doc.text(header, 50 + (i * colWidth), currentY, { width: colWidth, align: 'left' });
  });

  currentY += 20;
  doc.moveTo(50, currentY).lineTo(550, currentY).stroke();
  currentY += 5;

  // Draw rows
  doc.fontSize(9).fillColor('#000');
  rows.forEach((row, rowIndex) => {
    if (currentY > 700) {
      doc.addPage();
      currentY = 50;
    }

    row.forEach((cell, i) => {
      doc.text(cell, 50 + (i * colWidth), currentY, { width: colWidth, align: 'left' });
    });
    currentY += 18;

    if (rowIndex < rows.length - 1) {
      doc.moveTo(50, currentY).lineTo(550, currentY).strokeColor('#ddd').stroke().strokeColor('#000');
      currentY += 5;
    }
  });

  return currentY + 10;
};

// Helper function to add section header
const addSectionHeader = (doc, title) => {
  if (doc.y > 700) doc.addPage();
  doc.fontSize(16)
    .fillColor('#2563eb')
    .text(title, { underline: true })
    .fillColor('#000')
    .moveDown();
};

// Helper function to add PDF header
const addPDFHeader = (doc, title, category) => {
  doc.fontSize(24)
    .fillColor('#2563eb')
    .text('National Accounts Dashboard', { align: 'center' })
    .moveDown();

  doc.fontSize(20)
    .fillColor('#000')
    .text(title, { align: 'center' })
    .moveDown();

  doc.fontSize(12)
    .fillColor('#666')
    .text(`Category: ${category}`, { align: 'center' })
    .text(`Generated: ${new Date().toLocaleString('en-IN')}`, { align: 'center' })
    .moveDown(2);

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown();
};

// GDP Report Generator
const generateGDPReport = (doc) => {
  addPDFHeader(doc, 'Comprehensive GDP Report', 'GDP Analysis');

  // Executive Summary
  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('India\'s GDP has shown resilient growth trajectory over the past six years, with FY 2023-24 recording a growth rate of 8.2%. The economy has successfully recovered from the pandemic-induced contraction and is on a strong growth path.', { align: 'justify' })
    .moveDown(2);

  // GDP at Current Prices
  addSectionHeader(doc, 'GDP at Current Prices (Rs. Crore)');
  const gdpHeaders = ['Year', 'GDP Value', 'Growth Rate (%)', 'Per Capita Income (Rs.)'];
  const gdpRows = realGDPData.map(item => [
    item.year,
    formatNumber(item.value),
    item.growth.toFixed(1),
    formatNumber(item.perCapita)
  ]);
  addTable(doc, gdpHeaders, gdpRows);
  doc.moveDown();

  // GDP at Constant Prices
  addSectionHeader(doc, 'GDP at Constant Prices (Base: 2011-12)');
  const gdpConstHeaders = ['Year', 'GDP Value (Rs. Crore)', 'Real Growth Rate (%)'];
  const gdpConstRows = realGDPConstant.map(item => [
    item.year,
    formatNumber(item.value),
    item.growth.toFixed(1)
  ]);
  addTable(doc, gdpConstHeaders, gdpConstRows);
  doc.moveDown();

  // Sectoral Breakdown
  addSectionHeader(doc, 'Sectoral Contribution to GVA (%)');
  const sectorHeaders = ['Year', 'Agriculture & Allied', 'Industry', 'Services'];
  const sectorRows = sectoralGDP.map(item => [
    item.year,
    item.agriculture.toFixed(1),
    item.industry.toFixed(1),
    item.services.toFixed(1)
  ]);
  addTable(doc, sectorHeaders, sectorRows);
  doc.moveDown();

  // Key Insights
  addSectionHeader(doc, 'Key Insights');
  doc.fontSize(11)
    .text('• Services sector continues to dominate, contributing over 55% to GVA', { indent: 20 })
    .text('• Industry sector showing steady growth at around 26% contribution', { indent: 20 })
    .text('• Agriculture sector maintains stable contribution around 18%', { indent: 20 })
    .text('• Per capita income has grown from Rs. 1,40,095 (2018-19) to Rs. 2,06,403 (2023-24)', { indent: 20 })
    .moveDown(2);

  // Footer
  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Ministry of Statistics & Programme Implementation (MoSPI)', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Inflation Report Generator
const generateInflationReport = (doc) => {
  addPDFHeader(doc, 'Comprehensive Inflation Analysis Report', 'Inflation');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('Consumer Price Index (CPI) inflation has moderated to 5.4% in FY 2023-24 from 6.7% in the previous year, remaining within the RBI\'s target range of 2-6%. The decline is primarily driven by easing fuel prices and stable core inflation.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'CPI Inflation Trends (%)');
  const inflHeaders = ['Year', 'Overall CPI', 'Food Inflation', 'Fuel Inflation', 'Core Inflation'];
  const inflRows = inflationData.map(item => [
    item.year,
    item.cpi.toFixed(1),
    item.food.toFixed(1),
    item.fuel.toFixed(1),
    item.core.toFixed(1)
  ]);
  addTable(doc, inflHeaders, inflRows);
  doc.moveDown();

  addSectionHeader(doc, 'Key Observations');
  doc.fontSize(11)
    .text('• Overall CPI inflation peaked at 6.7% in 2022-23 due to global supply chain disruptions', { indent: 20 })
    .text('• Food inflation remains elevated at 6.6% in 2023-24', { indent: 20 })
    .text('• Fuel inflation has significantly moderated from 10.1% to 3.8%', { indent: 20 })
    .text('• Core inflation (excluding food and fuel) stands at a manageable 4.9%', { indent: 20 })
    .text('• RBI\'s monetary policy measures have been effective in controlling inflation', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Reserve Bank of India (RBI)', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Fiscal Report Generator
const generateFiscalReport = (doc) => {
  addPDFHeader(doc, 'Fiscal Deficit and Government Finances Report', 'Fiscal Policy');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('India\'s fiscal deficit has shown a declining trend, improving from 9.2% of GDP in 2020-21 (pandemic year) to 5.9% in 2023-24. The government continues its fiscal consolidation path while maintaining capital expenditure for infrastructure development.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Fiscal Indicators (% of GDP)');
  const fiscalHeaders = ['Year', 'Fiscal Deficit', 'Revenue Deficit', 'Primary Deficit', 'Total Debt'];
  const fiscalRows = fiscalData.map(item => [
    item.year,
    item.fiscalDeficit.toFixed(1),
    item.revenueDeficit.toFixed(1),
    item.primaryDeficit.toFixed(1),
    item.totalDebt.toFixed(1)
  ]);
  addTable(doc, fiscalHeaders, fiscalRows);
  doc.moveDown();

  addSectionHeader(doc, 'Analysis');
  doc.fontSize(11)
    .text('• Fiscal deficit improved by 0.5 percentage points to 5.9% in 2023-24', { indent: 20 })
    .text('• Revenue deficit reduced significantly from 4.1% to 2.8%', { indent: 20 })
    .text('• Total government debt stabilized at around 81.5% of GDP', { indent: 20 })
    .text('• Primary deficit (excluding interest payments) at 1.7% shows improving fiscal health', { indent: 20 })
    .text('• Government on track to meet fiscal consolidation targets', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Department of Economic Affairs, Ministry of Finance', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Trade Report Generator
const generateTradeReport = (doc) => {
  addPDFHeader(doc, 'Balance of Payments and Trade Analysis', 'International Trade');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('India\'s merchandise exports stood at USD 437 billion in FY 2023-24, while imports were USD 677 billion, resulting in a trade deficit of USD 240 billion. The current account deficit improved to USD 36 billion from USD 67 billion in the previous year.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Balance of Payments (Million USD)');
  const tradeHeaders = ['Year', 'Exports', 'Imports', 'Trade Balance', 'Current A/C', 'Capital A/C'];
  const tradeRows = balanceOfPayments.map(item => [
    item.year,
    formatNumber(item.exports),
    formatNumber(item.imports),
    formatNumber(item.tradeBalance),
    formatNumber(item.currentAccount),
    formatNumber(item.capitalAccount)
  ]);
  addTable(doc, tradeHeaders, tradeRows);
  doc.moveDown();

  addSectionHeader(doc, 'Key Highlights');
  doc.fontSize(11)
    .text('• Trade deficit narrowed from USD 267 billion to USD 240 billion', { indent: 20 })
    .text('• Current account deficit improved significantly to USD 36 billion (1.0% of GDP)', { indent: 20 })
    .text('• Capital account inflows remained robust at USD 85 billion', { indent: 20 })
    .text('• Exports declined marginally by 2.2% due to global demand slowdown', { indent: 20 })
    .text('• Imports moderated by 5.2%, primarily due to lower crude oil prices', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Directorate General of Commercial Intelligence and Statistics', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Employment Report Generator
const generateEmploymentReport = (doc) => {
  addPDFHeader(doc, 'Employment and Labor Force Statistics', 'Employment');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('The unemployment rate in India improved to 6.1% in FY 2023-24 from 6.8% in the previous year. The labor force participation rate increased to 52.4%, indicating growing workforce engagement.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Employment Statistics (Crore persons)');
  const empHeaders = ['Year', 'Labor Force', 'Employed', 'Unemployed', 'Unemployment Rate (%)'];
  const empRows = employmentData.map(item => [
    item.year,
    item.laborForce.toFixed(1),
    item.employed.toFixed(1),
    item.unemployed.toFixed(1),
    item.rate.toFixed(1)
  ]);
  addTable(doc, empHeaders, empRows);
  doc.moveDown();

  addSectionHeader(doc, 'Analysis');
  doc.fontSize(11)
    .text('• Unemployment rate declined from peak of 7.8% in 2021-22 to 6.1% in 2023-24', { indent: 20 })
    .text('• Total employed persons increased to 49.2 crore', { indent: 20 })
    .text('• Labor force participation improved, indicating economic recovery', { indent: 20 })
    .text('• Services and construction sectors driving employment growth', { indent: 20 })
    .text('• Government\'s skill development initiatives showing positive impact', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Labour Bureau, Ministry of Labour & Employment', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// State GDP Report Generator
const generateStateGDPReport = (doc) => {
  addPDFHeader(doc, 'State-wise GDP and Economic Performance', 'State GDP');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('Maharashtra continues to lead India\'s state economies with a GDP of Rs. 36.24 lakh crore, contributing 13.3% to national GDP. Karnataka recorded the highest growth rate at 10.2%, driven by IT and services sectors.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Top 10 States by GDP');
  const stateHeaders = ['State', 'GDP (Rs. Crore)', 'Share in National GDP (%)', 'Growth Rate (%)'];
  const stateRows = stateGDP.map(item => [
    item.state,
    formatNumber(item.gdp),
    item.share.toFixed(1),
    item.growth.toFixed(1)
  ]);
  addTable(doc, stateHeaders, stateRows);
  doc.moveDown();

  addSectionHeader(doc, 'Per Capita Income Rankings (Top 10)');
  const pcHeaders = ['Rank', 'State/UT', 'Per Capita Income (Rs.)'];
  const pcRows = perCapitaIncome.map(item => [
    item.rank.toString(),
    item.state,
    formatNumber(item.income)
  ]);
  addTable(doc, pcHeaders, pcRows);
  doc.moveDown();

  addSectionHeader(doc, 'Key Observations');
  doc.fontSize(11)
    .text('• Top 5 states contribute over 45% to India\'s GDP', { indent: 20 })
    .text('• Southern states (Karnataka, Tamil Nadu, Telangana) showing high growth rates', { indent: 20 })
    .text('• Goa leads in per capita income at Rs. 5,14,956', { indent: 20 })
    .text('• Regional economic disparities remain significant', { indent: 20 })
    .text('• Manufacturing and services hubs driving state-level growth', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Ministry of Statistics & Programme Implementation', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Banking Report Generator
const generateBankingReport = (doc) => {
  addPDFHeader(doc, 'Banking Sector Performance Report', 'Banking & Finance');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('India\'s banking sector continues to strengthen with improving asset quality and robust capital adequacy. Total deposits reached Rs. 198.96 lakh crore while credit stood at Rs. 159.78 lakh crore, reflecting healthy credit growth.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Key Banking Indicators');
  doc.fontSize(11)
    .fillColor('#2563eb')
    .text('Total Deposits: ', { continued: true })
    .fillColor('#000')
    .text(`Rs. ${formatNumber(bankingData.deposits)} Crore`)
    .fillColor('#2563eb')
    .text('Total Credit: ', { continued: true })
    .fillColor('#000')
    .text(`Rs. ${formatNumber(bankingData.credit)} Crore`)
    .fillColor('#2563eb')
    .text('Credit-Deposit Ratio: ', { continued: true })
    .fillColor('#000')
    .text(`${bankingData.creditDepositRatio}%`)
    .fillColor('#2563eb')
    .text('Gross NPA Ratio: ', { continued: true })
    .fillColor('#000')
    .text(`${bankingData.grossNPA}%`)
    .fillColor('#2563eb')
    .text('Net NPA Ratio: ', { continued: true })
    .fillColor('#000')
    .text(`${bankingData.netNPA}%`)
    .fillColor('#2563eb')
    .text('Capital Adequacy Ratio: ', { continued: true })
    .fillColor('#000')
    .text(`${bankingData.capitalAdequacy}%`)
    .moveDown(2);

  addSectionHeader(doc, 'Analysis');
  doc.fontSize(11)
    .text('• Gross NPA ratio improved to 3.2%, lowest in over a decade', { indent: 20 })
    .text('• Net NPA ratio at comfortable 0.8%, indicating strong provisioning', { indent: 20 })
    .text('• Capital adequacy ratio at 16.8%, well above regulatory requirement of 11.5%', { indent: 20 })
    .text('• Credit growth outpacing deposit growth, CD ratio at 80.3%', { indent: 20 })
    .text('• Banking sector well-positioned to support economic growth', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Reserve Bank of India (RBI)', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Agriculture Report Generator
const generateAgricultureReport = (doc) => {
  addPDFHeader(doc, 'Agricultural Production Report', 'Agriculture');

  addSectionHeader(doc, 'Executive Summary');
  doc.fontSize(11)
    .text('India\'s foodgrain production reached a record 329.68 million tonnes in 2023-24, driven by favorable monsoons and government support measures. Rice and wheat production remained robust, ensuring food security.', { align: 'justify' })
    .moveDown(2);

  addSectionHeader(doc, 'Agricultural Production (Million Tonnes)');
  doc.fontSize(11)
    .fillColor('#2563eb')
    .text('Total Foodgrains: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.foodgrains} MT`)
    .fillColor('#2563eb')
    .text('Rice: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.rice} MT`)
    .fillColor('#2563eb')
    .text('Wheat: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.wheat} MT`)
    .fillColor('#2563eb')
    .text('Pulses: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.pulses} MT`)
    .fillColor('#2563eb')
    .text('Oilseeds: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.oilseeds} MT`)
    .fillColor('#2563eb')
    .text('Sugarcane: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.sugarcane} MT`)
    .fillColor('#2563eb')
    .text('Cotton: ', { continued: true })
    .fillColor('#000')
    .text(`${agricultureProduction.cotton} Million Bales`)
    .moveDown(2);

  addSectionHeader(doc, 'Key Highlights');
  doc.fontSize(11)
    .text('• Record foodgrain production ensuring food security for 1.4 billion population', { indent: 20 })
    .text('• Rice production at 135.54 MT, maintaining India\'s position as major exporter', { indent: 20 })
    .text('• Wheat production at 112.74 MT, sufficient for domestic consumption', { indent: 20 })
    .text('• Pulses production improved to 27.34 MT, reducing import dependency', { indent: 20 })
    .text('• Sugarcane production at record 453.16 MT, supporting sugar and ethanol industries', { indent: 20 })
    .text('• Cotton production at 34.56 million bales, supporting textile sector', { indent: 20 })
    .moveDown(2);

  doc.fontSize(10)
    .fillColor('#666')
    .text('Data Source: Ministry of Agriculture & Farmers Welfare', { align: 'center' })
    .text('National Accounts Dashboard | Government of India', { align: 'center' });
};

// Main download report function
const downloadReport = async (req, res) => {
  try {
    const { reportId } = req.params;

    // Create PDF document
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50
    });

    // Set response headers
    let filename = 'report.pdf';

    // Generate appropriate report based on reportId
    switch (reportId.toLowerCase()) {
      case 'gdp':
      case '1':
        filename = 'GDP_Report.pdf';
        generateGDPReport(doc);
        break;
      case 'inflation':
      case '2':
        filename = 'Inflation_Report.pdf';
        generateInflationReport(doc);
        break;
      case 'fiscal':
      case '3':
        filename = 'Fiscal_Report.pdf';
        generateFiscalReport(doc);
        break;
      case 'trade':
      case '4':
        filename = 'Trade_Report.pdf';
        generateTradeReport(doc);
        break;
      case 'employment':
      case '5':
        filename = 'Employment_Report.pdf';
        generateEmploymentReport(doc);
        break;
      case 'stategdp':
      case '6':
        filename = 'State_GDP_Report.pdf';
        generateStateGDPReport(doc);
        break;
      case 'banking':
      case '7':
        filename = 'Banking_Report.pdf';
        generateBankingReport(doc);
        break;
      case 'agriculture':
      case '8':
        filename = 'Agriculture_Report.pdf';
        generateAgricultureReport(doc);
        break;
      default:
        // Default to GDP report
        filename = 'GDP_Report.pdf';
        generateGDPReport(doc);
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Pipe PDF to response
    doc.pipe(res);

    // Finalize PDF
    doc.end();

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ message: 'Failed to generate report' });
  }
};

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find({ isActive: true })
      .sort({ createdAt: -1 })
      .populate('uploadedBy', 'name email');

    res.json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
};

// Upload report (admin only)
const uploadReport = async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Validate required fields
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        message: 'Missing required fields',
        details: {
          title: !title ? 'Title is required' : null,
          description: !description ? 'Description is required' : null,
          category: !category ? 'Category is required' : null
        }
      });
    }

    // Determine file type
    let fileType = 'pdf';
    if (req.file.mimetype.includes('excel') || req.file.mimetype.includes('spreadsheet')) {
      fileType = 'excel';
    } else if (req.file.mimetype.includes('csv')) {
      fileType = 'csv';
    }

    // Calculate file size in human-readable format
    const sizeInMB = (req.file.size / (1024 * 1024)).toFixed(2);
    const size = `${sizeInMB} MB`;

    console.log('Creating report with data:', {
      title,
      description,
      category,
      fileType,
      size,
      fileName: req.file.originalname,
      uploadedBy: req.user._id
    });

    // Create report entry
    const report = await Report.create({
      title,
      description,
      category,
      type: 'uploaded',
      fileUrl: req.file.filename,
      fileName: req.file.originalname,
      fileType,
      size,
      uploadedBy: req.user._id
    });

    console.log('Report created successfully:', report._id);
    res.status(201).json(report);
  } catch (error) {
    console.error('Upload error details:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      }));
      return res.status(400).json({
        message: 'Validation failed',
        errors
      });
    }

    // Handle other errors
    res.status(500).json({
      message: 'Failed to upload report',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Delete report (admin only)
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    // If it's an uploaded file, delete the physical file
    if (report.type === 'uploaded' && report.fileUrl) {
      const filePath = path.join(__dirname, '..', 'uploads', 'reports', report.fileUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Delete from database
    await Report.findByIdAndDelete(id);

    res.json({ message: 'Report deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Failed to delete report' });
  }
};

// Download uploaded file
const downloadUploadedFile = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    if (report.type !== 'uploaded') {
      return res.status(400).json({ message: 'This is not an uploaded file' });
    }

    const filePath = path.join(__dirname, '..', 'uploads', 'reports', report.fileUrl);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    // Increment download count
    report.downloadCount += 1;
    await report.save();

    // Send file
    res.download(filePath, report.fileName);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ message: 'Failed to download file' });
  }
};

module.exports = {
  downloadReport,
  getAllReports,
  uploadReport,
  deleteReport,
  downloadUploadedFile
};