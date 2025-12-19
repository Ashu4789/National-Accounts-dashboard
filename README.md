# 🇮🇳 National Accounts Dashboard - Full Stack MERN Application

# 🇮🇳 National Accounts Dashboard - India Economic Data Platform

[![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)](https.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive full-stack dashboard application for monitoring, analyzing, and visualizing India's national economic indicators. Features complete user authentication, real Indian economic data, interactive visualizations, dark mode, PDF report generation, and email notifications.

**Live Data Sources**: Ministry of Statistics (MoSPI), Reserve Bank of India (RBI), Department of Economic Affairs (DEA)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Data Coverage](#-data-coverage)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Dashboard Pages](#-dashboard-pages)
- [Data Sources](#-data-sources)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & User Management
- ✅ Complete signup/login system with JWT authentication
- ✅ 6-field registration (Name, Email, Phone, Organization, Password)
- ✅ Protected routes with middleware
- ✅ User profile management with real-time updates
- ✅ Secure password change with validation
- ✅ Email uniqueness validation
- ✅ Session persistence

### 📊 Comprehensive Economic Data Dashboard
- ✅ **Overview Dashboard**: 8 key Indian economic indicators with real-time data
- ✅ **GDP Analysis**: Sectoral breakdown (Agriculture, Industry, Services)
- ✅ **Fiscal Data**: Government budget, deficit tracking, debt analysis
- ✅ **Trade & Balance of Payments**: Exports, imports, trade deficit analysis
- ✅ **State-wise GDP**: Top 10 states ranking and per capita income
- ✅ **Employment Statistics**: Labor force, unemployment trends
- ✅ **Interactive Charts**: 15+ visualizations with Recharts (Line, Area, Bar, Pie)
- ✅ **Recent Updates Feed**: Real-time activity tracking

### 📈 Real Indian Economic Data (FY 2018-19 to 2023-24)
- ✅ GDP at Current & Constant Prices
- ✅ Real GDP Growth Rates
- ✅ Inflation metrics (CPI, food, fuel, core)
- ✅ Fiscal indicators (deficits, debt)
- ✅ Balance of Payments
- ✅ Employment statistics
- ✅ State-wise economic data
- ✅ Sectoral contributions
- ✅ Foreign exchange reserves
- ✅ Trade data by category

### ⚙️ Settings & Customization
- ✅ **Profile Settings**: Update personal information (name, email, phone, organization)
- ✅ **Security**: Change password with current password verification
- ✅ **Notifications**: Configure 4 types of preferences
  - Email Notifications
  - Push Notifications
  - Weekly Reports
  - Data Updates
- ✅ **Appearance**: Dark/Light mode toggle
- ✅ **Theme Persistence**: Settings saved to database and localStorage

### 📄 Reports & Documents
- ✅ Dynamic PDF generation with PDFKit
- ✅ Professional report formatting with Indian economic data
- ✅ Filter by type (GDP, Inflation, Fiscal, Trade, Employment)
- ✅ Filter by period (Yearly, Quarterly, Monthly)
- ✅ One-click download functionality
- ✅ 6+ pre-configured report templates

### 📧 Contact & Communication
- ✅ Contact form with Nodemailer integration
- ✅ Admin notification emails
- ✅ User confirmation emails
- ✅ Form validation and error handling
- ✅ FAQ section with common queries

### 🎨 Modern UI/UX
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Dark mode support across entire application
- ✅ Modern gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Professional sidebar navigation
- ✅ Toast notifications for user actions
- ✅ Loading states and error messages
- ✅ Accessible design with ARIA labels

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **Recharts** - Chart library for data visualization
- **Lucide React** - Modern icon library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM with schema validation
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing and encryption
- **Nodemailer** - Email sending functionality
- **PDFKit** - Dynamic PDF generation
- **CORS** - Cross-origin resource sharing

---

## 📊 Data Coverage

### Economic Indicators (FY 2018-19 to 2023-24)

#### GDP Metrics
- GDP at Current Prices: ₹295.99 Lakh Crore (FY24)
- GDP at Constant Prices (Base: 2011-12)
- Real GDP Growth: 8.2% (FY24)
- Per Capita Income: ₹2,06,403 (FY24)
- Sectoral Breakdown:
  - Agriculture & Allied: 18.2%
  - Industry: 25.9%
  - Services: 55.9%

#### Inflation Data
- Consumer Price Index (CPI): 5.4% (FY24)
- Food Inflation: 6.6%
- Fuel & Light: 3.8%
- Core Inflation: 4.9%

#### Fiscal Indicators
- Fiscal Deficit: 5.9% of GDP (FY24)
- Revenue Deficit: 2.8% of GDP
- Primary Deficit: 1.7% of GDP
- Total Public Debt: 81.5% of GDP

#### Trade Statistics
- Merchandise Exports: $437 Billion (FY24)
- Merchandise Imports: $677 Billion
- Trade Deficit: $240 Billion
- Current Account Deficit: 1.2% of GDP
- Foreign Exchange Reserves: $645.58 Billion

#### Employment Data
- Labor Force: 52.4 Crore
- Employed: 49.2 Crore
- Unemployment Rate: 6.1% (FY24)
- Labor Force Participation Rate: 46.8%

#### State-wise GDP (Top 10)
1. Maharashtra: ₹36.24 Lakh Crore (13.3% share)
2. Tamil Nadu: ₹24.25 Lakh Crore (8.9%)
3. Gujarat: ₹21.43 Lakh Crore (7.9%)
4. Karnataka: ₹21.03 Lakh Crore (7.7%)
5. Uttar Pradesh: ₹20.87 Lakh Crore (7.7%)
6. West Bengal, Rajasthan, Andhra Pradesh, Telangana, Madhya Pradesh

---

## 📁 Project Structure

```
national-accounts-dashboard/
├── client/                              # Frontend (React + Vite)
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardLayout.jsx          # Sidebar + main layout
│   │   │   ├── StatsCard.jsx                # Reusable metric cards
│   │   │   ├── OverviewChart.jsx            # Chart component (Recharts)
│   │   │   ├── RecentUpdates.jsx            # Activity feed widget
│   │   │   ├── Navbar.jsx                   # Top navigation bar
│   │   │   └── ProtectedRoute.jsx           # Route authentication guard
│   │   ├── pages/
│   │   │   ├── Home.jsx                     # Landing page
│   │   │   ├── Login.jsx                    # Login page
│   │   │   ├── Signup.jsx                   # Registration (6 fields)
│   │   │   ├── Dashboard.jsx                # Main overview dashboard
│   │   │   ├── GDPAnalysis.jsx              # GDP detailed analysis
│   │   │   ├── FiscalData.jsx               # Fiscal metrics & budget
│   │   │   ├── TradeData.jsx                # Trade & BoP analysis
│   │   │   ├── StateGDP.jsx                 # State-wise GDP rankings
│   │   │   ├── Employment.jsx               # Employment statistics
│   │   │   ├── Reports.jsx                  # PDF report downloads
│   │   │   ├── Settings.jsx                 # User settings (4 tabs)
│   │   │   └── ContactUs.jsx                # Contact form with email
│   │   ├── context/
│   │   │   ├── AuthContext.jsx              # Auth state management
│   │   │   └── ThemeContext.jsx             # Dark mode management
│   │   ├── services/
│   │   │   └── api.js                       # Axios API calls
│   │   ├── data/
│   │   │   ├── dashboardData.js             # Legacy dummy data
│   │   │   └── realIndiaData.js             # Real Indian economic data
│   │   ├── App.jsx                          # Main app component
│   │   ├── main.jsx                         # React entry point
│   │   └── index.css                        # Global styles + Tailwind
│   ├── .env                                 # Frontend environment variables
│   ├── package.json
│   ├── tailwind.config.js                   # Tailwind configuration
│   ├── vite.config.js                       # Vite configuration
│   └── vercel.json                          # Vercel deployment config
│
└── server/                              # Backend (Node.js + Express)
    ├── config/
    │   └── db.js                            # MongoDB connection
    ├── models/
    │   └── User.js                          # User schema with preferences
    ├── routes/
    │   ├── auth.js                          # Authentication routes
    │   ├── user.js                          # User management routes
    │   ├── contact.js                       # Contact form route
    │   └── reports.js                       # Report download route
    ├── middleware/
    │   └── auth.js                          # JWT verification middleware
    ├── controllers/
    │   ├── authController.js                # Auth logic (signup, login)
    │   ├── userController.js                # Profile/preferences updates
    │   ├── contactController.js             # Email sending logic
    │   └── reportController.js              # PDF generation logic
    ├── .env                                 # Backend environment variables
    ├── package.json
    └── server.js                            # Express server entry point
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **MongoDB Atlas** account (free tier available) ([Sign up](https://www.mongodb.com/cloud/atlas))
- **Git** ([Download](https://git-scm.com/))
- **Gmail account** (for email features) or alternative email service

### Step 1: Clone Repository

```bash
git clone <your-repository-url>
cd national-accounts-dashboard
```

### Step 2: Backend Setup

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install
```

**Packages installed:**
- express, mongoose, bcryptjs, jsonwebtoken, dotenv, cors
- nodemailer (email), pdfkit (PDF generation)

**Update package.json scripts:**
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Step 3: Frontend Setup

```bash
# Navigate to client folder (from root)
cd ../client

# Install dependencies
npm install
```

**Packages installed:**
- react, react-router-dom, axios
- recharts (charts), lucide-react (icons)
- tailwindcss (styling)

---

## 🔐 Environment Setup

### Backend Environment Variables

Create `server/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/national-accounts?retryWrites=true&w=majority

# JWT Configuration (use strong random string, min 32 characters)
JWT_SECRET=your_super_secret_jwt_key_at_least_32_characters_long_change_this

# Email Configuration (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
ADMIN_EMAIL=admin@nationalaccounts.gov.in
```

### Frontend Environment Variables

Create `client/.env` file:

```env
# API Base URL
VITE_API_URL=http://localhost:5000/api
```

### MongoDB Atlas Setup (Free Tier)

1. **Create Account**: 
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free account

2. **Create Cluster**:
   - Choose FREE tier (M0 Sandbox)
   - Select region (preferably closest to you)
   - Name your cluster

3. **Database Access**:
   - Create database user with username and password
   - Note down credentials

4. **Network Access**:
   - Add IP Address: `0.0.0.0/0` (allow from anywhere)
   - Or add your specific IP address

5. **Connect**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<username>`, `<password>`, and database name
   - Paste in `MONGODB_URI` in `.env`

### Gmail Setup for Email Features

1. **Enable 2-Factor Authentication**:
   - Go to Google Account → Security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Enter "National Accounts Dashboard"
   - Copy the 16-character password
   - Use this in `EMAIL_PASS` in `.env`

**⚠️ Important**: Never use your actual Gmail password. Always use App Passwords.

**Alternative Email Services**:
- **SendGrid**: Professional email service with free tier
- **Mailgun**: Reliable email API
- **AWS SES**: Amazon's email service

---

## ▶️ Running the Application

### Development Mode

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev

# Output:
# Server running on port 5000
# MongoDB Connected: cluster0.xxxxx.mongodb.net
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev

# Output:
# VITE ready in 500 ms
# ➜ Local: http://localhost:3000
# ➜ Network: use --host to expose
```

**Access the application**: Open browser and go to `http://localhost:3000`

### Production Build

**Frontend:**
```bash
cd client
npm run build
# Creates optimized build in dist/ folder
```

**Backend:**
```bash
cd server
npm start
# Runs with node (production mode)
```

---

## 📡 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://your-backend-domain.com/api
```

### Authentication Endpoints

#### 1. User Registration
```http
POST /api/auth/signup
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "password": "securepass123"
}

Response (201 Created):
{
  "_id": "64abc123def456...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 2. User Login
```http
POST /api/auth/login
Content-Type: application/json

Request Body:
{
  "email": "john@example.com",
  "password": "securepass123"
}

Response (200 OK):
{
  "_id": "64abc123def456...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 3. Get Current User
```http
GET /api/auth/me
Authorization: Bearer {token}

Response (200 OK):
{
  "_id": "64abc123def456...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "preferences": {
    "notifications": { ... },
    "appearance": { ... }
  }
}
```

### User Management Endpoints

#### 4. Update Profile
```http
PUT /api/user/profile
Authorization: Bearer {token}
Content-Type: application/json

Request Body:
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "organization": "New Company"
}

Response (200 OK):
{
  "_id": "64abc123def456...",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "organization": "New Company",
  "role": "user",
  "preferences": { ... }
}
```

#### 5. Change Password
```http
PUT /api/user/password
Authorization: Bearer {token}
Content-Type: application/json

Request Body:
{
  "currentPassword": "oldpass123",
  "newPassword": "newpass456"
}

Response (200 OK):
{
  "message": "Password changed successfully"
}
```

#### 6. Update Preferences
```http
PUT /api/user/preferences
Authorization: Bearer {token}
Content-Type: application/json

Request Body:
{
  "notifications": {
    "emailNotifications": true,
    "pushNotifications": false,
    "weeklyReport": true,
    "dataUpdates": true
  },
  "appearance": {
    "darkMode": true
  }
}

Response (200 OK):
{
  "message": "Preferences updated successfully",
  "preferences": { ... }
}
```

### Contact Endpoint

#### 7. Send Contact Message
```http
POST /api/contact
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Data inquiry",
  "message": "I would like to know more about..."
}

Response (200 OK):
{
  "message": "Message sent successfully"
}
```

### Reports Endpoint

#### 8. Download PDF Report
```http
GET /api/reports/download/{reportId}
Authorization: Bearer {token}

Response: PDF file (application/pdf)
Content-Disposition: attachment; filename="Annual_GDP_Report_2024.pdf"
```

---

## 🗺️ Dashboard Pages

### 1. Overview Dashboard (`/dashboard`)
**8 Key Metric Cards:**
- GDP at Current Prices
- GDP Growth Rate
- Inflation (CPI)
- Fiscal Deficit
- Per Capita Income
- Unemployment Rate
- Forex Reserves
- Merchandise Exports

**4 Interactive Charts:**
- Real GDP at Constant Prices (Area)
- GDP Growth Rate (Line)
- CPI Inflation Rate (Line)
- Fiscal Deficit (Area)

**Recent Updates Feed**: Latest 5 economic updates

### 2. GDP Analysis (`/dashboard/gdp`)
**Features:**
- 3 Sectoral contribution cards
- GDP value trends (Lakh Crore Rs.)
- Year-on-year growth rates
- Historical data from FY 2018-19 to 2023-24

**Data Breakdown:**
- Agriculture & Allied: 18.2% of GVA
- Industry: 25.9% of GVA
- Services: 55.9% of GVA

### 3. Fiscal Data (`/dashboard/fiscal`)
**Features:**
- 4 Fiscal indicator cards
- Fiscal deficit trend chart
- Key highlights and insights

**Metrics:**
- Fiscal Deficit: 5.9% of GDP
- Revenue Deficit: 2.8% of GDP
- Primary Deficit: 1.7% of GDP
- Total Debt: 81.5% of GDP

### 4. Trade & Balance of Payments (`/dashboard/trade`)
**Features:**
- 4 Trade metric cards
- Exports/Imports bar chart
- Export composition pie chart
- Import composition pie chart
- Key trade insights

**Data:**
- Exports: $437 Billion
- Imports: $677 Billion
- Trade Deficit: $240 Billion
- Current Account Deficit: $36 Billion (1.2% of GDP)

### 5. State-wise GDP (`/dashboard/states`)
**Features:**
- Top 10 states horizontal bar chart
- State GDP contribution table
- Per capita income ranking table
- State economic insights

**Top States:**
- Maharashtra leads with 13.3% share
- Top 10 states contribute 63% of GDP
- Per capita leaders: Goa, Delhi, Sikkim

### 6. Employment Statistics (`/dashboard/employment`)
**Features:**
- 4 Employment metric cards
- Unemployment trend chart
- Labor force growth chart
- Employment statistics table
- Sectoral employment insights

**Data:**
- Labor Force: 52.4 Crore
- Employed: 49.2 Crore
- Unemployment Rate: 6.1%
- LFPR: 46.8%

### 7. Reports (`/dashboard/reports`)
**Features:**
- Filter by report type
- Filter by time period
- 6 downloadable PDF reports
- Report metadata display
- Statistics summary

**Available Reports:**
- Annual GDP Report 2024
- Q4 Inflation Analysis
- Fiscal Budget Report FY2024
- Trade Balance Report
- Employment Statistics 2024
- Sectoral Growth Analysis

### 8. Settings (`/dashboard/settings`)
**4 Tabs:**

**Profile Tab:**
- Update name, email, phone, organization
- Real-time validation
- Success notifications

**Security Tab:**
- Change password
- Current password verification
- Two-factor authentication (placeholder)

**Notifications Tab:**
- Email Notifications toggle
- Push Notifications toggle
- Weekly Reports toggle
- Data Updates toggle

**Appearance Tab:**
- Dark Mode toggle
- Theme persistence

### 9. Contact (`/contact`)
**Features:**
- Contact form with validation
- 4 Contact info cards
- FAQ section
- Map placeholder
- Email sending integration

---

## 📚 Data Sources

All data is compiled from official Government of India sources:

### Primary Sources

1. **Ministry of Statistics and Programme Implementation (MoSPI)**
   - Website: [mospi.gov.in](https://mospi.gov.in)
   - Data: National Accounts Statistics, GDP, Sectoral data
   - Frequency: Quarterly and Annual

2. **Reserve Bank of India (RBI)**
   - Website: [rbi.org.in](https://rbi.org.in)
   - Data: Monetary policy, Forex reserves, Banking data, BoP
   - Frequency: Monthly and Quarterly

3. **Department of Economic Affairs (DEA)**
   - Website: [dea.gov.in](https://dea.gov.in)
   - Data: Budget documents, Fiscal deficit, Government finances
   - Frequency: Annual and Monthly

4. **Directorate General of Commercial Intelligence and Statistics**
   - Website: [commerce.gov.in](https://commerce.gov.in)
   - Data: Trade statistics, Export-Import data
   - Frequency: Monthly

5. **Labour Bureau, Ministry of Labour**
   - Website: [labour.gov.in](https://labour.gov.in)
   - Data: Employment statistics, Labor force surveys
   - Frequency: Quarterly

### Data Accuracy & Disclaimer

**All data in this dashboard:**
- ✅ Sourced from official Government of India publications
- ✅ Publicly available information
- ✅ Updated as of FY 2023-24 (latest available)
- ✅ Suitable for educational, research, and analytical purposes

**For official use:**
- Always refer to original government sources
- Check for latest revisions and provisional estimates
- Verify data before making financial or policy decisions
- Note that some data may be provisional and subject to revision

---

## 🌐 Deployment

### Backend Deployment

#### Option 1: Railway (Recommended)

1. **Install Railway CLI**:
```bash
npm install -g @railway/cli
```

2. **Login and Deploy**:
```bash
cd server
railway login
railway init
railway up
```

3. **Set Environment Variables** in Railway Dashboard:
```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@domain.com
NODE_ENV=production
```

4. **Get Deployment URL**: Railway provides automatic URL

#### Option 2: Render

1. Go to [Render.com](https://render.com)
2. Create New Web Service
3. Connect GitHub repository
4. Configure:
   - **Name**: national-accounts-api
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables (same as above)
6. Deploy

### Frontend Deployment

#### Vercel (Recommended)

**Method 1: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd client
vercel
```

**Method 2: Vercel Dashboard**

1. Go to [Vercel.com](https://vercel.com)
2. Import Git Repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variable:
   ```env
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```
5. Deploy

### Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Environment variables configured correctly
- [ ] MongoDB connection working
- [ ] Email sending functional
- [ ] CORS configured for production URLs
- [ ] HTTPS enabled on both frontend and backend
- [ ] Test all API endpoints
- [ ] Test authentication flow
- [ ] Test PDF downloads
- [ ] Test contact form emails
- [ ] Test dark mode
- [ ] Verify all dashboard pages load
- [ ] Test mobile responsiveness

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. MongoDB Connection Failed

**Symptoms:**
```
MongooseServerSelectionError: connect ETIMEDOUT
```

**Solutions:**
- ✅ Verify `MONGODB_URI` is correct in `.env`
- ✅ Check Network Access in MongoDB Atlas (whitelist `0.0.0.0/0`)
- ✅ Ensure database user credentials are correct
- ✅ Verify cluster is running (not paused)
- ✅ Check if VPN/firewall is blocking connection

#### 2. JWT Token Errors

**Symptoms:**
```
JsonWebTokenError: invalid signature
Not authorized, token failed
```

**Solutions:**
- ✅ Ensure `JWT_SECRET` is same in `.env` across restarts
- ✅ Check token is being sent in Authorization header
- ✅ Verify token format: `Bearer <token>`
- ✅ Token may have expired (default 30 days)
- ✅ Clear localStorage and login again

#### 3. Email Not Sending

**Symptoms:**
- Contact form submits but no email received
- Error in server console

**Solutions:**
- ✅ Verify Gmail 2FA is enabled
- ✅ Use App Password, not regular Gmail password
- ✅ Check `EMAIL_USER` and `EMAIL_PASS` are correct in `.env`
- ✅ Ensure less secure app access is NOT needed (use App Passwords instead)
- ✅ Try alternative email service (SendGrid, Mailgun)
- ✅ Check Gmail inbox and spam folder

#### 4. PDF Download Not Working

**Symptoms:**
- Click download but nothing happens
- Error in browser console

**Solutions:**
- ✅ Verify PDFKit is installed: `npm list pdfkit`
- ✅ Check backend route is accessible
- ✅ Disable browser popup blocker
- ✅ Check server console for PDF generation errors
- ✅ Ensure user is authenticated (valid token)
- ✅ Try different browser

#### 5. Dark Mode Not Persisting

**Symptoms:**
- Dark mode resets on page refresh

**Solutions:**
- ✅ Check `tailwind.config.js` has `darkMode: 'class'`
- ✅ Verify ThemeProvider wraps entire App
- ✅ Check localStorage has 'darkMode' key
- ✅ Clear browser cache and try again
- ✅ Ensure ThemeContext is properly initialized

#### 6. Profile Updates Not Working

**Symptoms:**
- Changes don't save or show in UI
- Navbar doesn't update

**Solutions:**
- ✅ Verify backend is running on correct port
- ✅ Check JWT token is valid (not expired)
- ✅ Look at Network tab for API errors
- ✅ Ensure `updateUser` function is called in Settings
- ✅ Verify AuthContext provides updateUser
- ✅ Check MongoDB connection is active

#### 7. CORS Errors

**Symptoms:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solutions:**
- ✅ Verify `cors()` middleware is used in `server.js`
- ✅ Check frontend `VITE_API_URL` matches backend URL
- ✅ In production, configure CORS with specific origins:
```javascript
app.use(cors({
  origin: ['https://your-frontend.vercel.app'],
  credentials: true
}));
```

#### 8. Charts Not Rendering

**Symptoms:**
- Empty space where charts should be
- Console errors about Recharts

**Solutions:**
- ✅ Ensure Recharts is installed: `

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. MongoDB Connection Failed

**Symptoms:**
```
MongooseServerSelectionError: connect ETIMEDOUT
```

**Solutions:**
- Check `MONGODB_URI` is correct
- Verify network access in MongoDB Atlas (0.0.0.0/0)
- Check database user credentials
- Ensure cluster is running

#### 2. Email Not Sending

**Symptoms:**
- Contact form submits but no email received
- Error in server console

**Solutions:**
- Verify Gmail 2FA is enabled
- Use App Password, not regular password
- Check `EMAIL_USER` and `EMAIL_PASS` are correct
- Test with different email service if needed

#### 3. PDF Download Not Working

**Symptoms:**
- Click download but nothing happens
- Error in browser console

**Solutions:**
- Check PDFKit is installed: `npm list pdfkit`
- Verify backend route is correct
- Check browser popup blocker
- Look at server console for errors

#### 4. Dark Mode Not Persisting

**Symptoms:**
- Dark mode resets on page refresh

**Solutions:**
- Check `tailwind.config.js` has `darkMode: 'class'`
- Verify ThemeProvider wraps App component
- Clear browser localStorage and try again
- Check browser console for errors

#### 5. Profile Updates Not Working

**Symptoms:**
- Changes don't save or show in UI

**Solutions:**
- Verify backend is running
- Check token is valid (not expired)
- Look at network tab for API errors
- Ensure `updateUser` function is in AuthContext

#### 6. CORS Errors

**Symptoms:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solutions:**
- Verify `cors()` middleware in `server.js`
- Check frontend API URL matches backend
- In production, configure CORS with specific origins

#### 7. Charts Not Rendering

**Symptoms:**
- Empty space where charts should be

**Solutions:**
- Ensure Recharts is installed: `npm list recharts`
- Check data format matches chart requirements
- Verify ResponsiveContainer has proper height
- Look at browser console for errors

---

## 🧪 Testing Guide

### Manual Testing Checklist

#### Authentication
- [ ] Sign up with all fields
- [ ] Sign up with duplicate email (should fail)
- [ ] Sign up with short password (should fail)
- [ ] Login with correct credentials
- [ ] Login with wrong credentials (should fail)
- [ ] Access protected route without login (should redirect)
- [ ] Logout successfully

#### Profile Management
- [ ] View profile in Settings
- [ ] Update name
- [ ] Update email
- [ ] Update phone
- [ ] Update organization
- [ ] Verify navbar updates immediately
- [ ] Refresh page - changes persist
- [ ] Logout and login - changes persist

#### Password Change
- [ ] Change password with correct current password
- [ ] Try wrong current password (should fail)
- [ ] Try mismatched new passwords (should fail)
- [ ] Try password under 6 characters (should fail)
- [ ] Login with new password

#### Dark Mode
- [ ] Toggle dark mode on
- [ ] Check all pages respect dark mode
- [ ] Refresh page - dark mode persists
- [ ] Toggle dark mode off
- [ ] Check light mode restored

#### Reports
- [ ] Filter by report type
- [ ] Filter by time period
- [ ] Download PDF report
- [ ] Verify PDF opens correctly
- [ ] Check PDF formatting

#### Contact Form
- [ ] Fill all fields and submit
- [ ] Check success message
- [ ] Verify admin receives email
- [ ] Verify user receives confirmation
- [ ] Try submitting with empty fields (should fail)

#### Dashboard
- [ ] All metrics load correctly
- [ ] Charts render properly
- [ ] Sidebar navigation works
- [ ] Recent updates show correct data
- [ ] Mobile menu works on small screens

---

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Make changes and commit**
```bash
git commit -m "Add amazing feature"
```
4. **Push to branch**
```bash
git push origin feature/amazing-feature
```
5. **Open Pull Request**

### Code Style

- **JavaScript**: Use ES6+ features
- **React**: Functional components with hooks
- **CSS**: Tailwind utility classes
- **Formatting**: Prettier recommended
- **Naming**: camelCase for variables, PascalCase for components

### Adding New Features

1. Update backend routes if needed
2. Create/update controllers
3. Update User model if schema changes
4. Create frontend components
5. Update context if state management needed
6. Add to navigation if new page
7. Update README with new feature
8. Test thoroughly before PR

---

## 📊 Project Statistics

- **Total Files**: 40+
- **Total Lines of Code**: 8000+
- **Components**: 15+
- **API Endpoints**: 8
- **Pages**: 9
- **Dependencies**: 25+

---

## 📜 License

MIT License

Copyright (c) 2024 National Accounts Dashboard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

- **MongoDB** for the excellent database service
- **Vercel** for frontend hosting
- **Railway/Render** for backend hosting
- **Recharts** for beautiful chart components
- **Lucide** for icon library
- **Tailwind CSS** for utility-first CSS

---

## 📞 Support

For support, email support@nationalaccounts.gov.in or create an issue in the repository.

---

## 🎯 Roadmap

### Upcoming Features
- [ ] Real-time data integration with government APIs
- [ ] Advanced data filtering and search
- [ ] Export data to Excel/CSV
- [ ] User roles (Admin, Viewer, Analyst)
- [ ] Two-factor authentication
- [ ] Email verification on signup
- [ ] Password reset via email
- [ ] Activity logs and audit trail
- [ ] Custom dashboard widgets
- [ ] Data comparison tools
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced analytics and predictions

---

## 🚀 Quick Start Commands

```bash
# Full setup
git clone <repo>
cd national-accounts-dashboard

# Backend
cd server
npm install
# Add .env file
npm run dev

# Frontend (new terminal)
cd client
npm install
# Add .env file
npm run dev

# Visit http://localhost:3000
```

---

**Built with ❤️ using MERN Stack**

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Status**: Production Ready ✅