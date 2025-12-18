# 🇮🇳 National Accounts Dashboard - Full Stack MERN Application

[![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)

A comprehensive full-stack dashboard application for monitoring and analyzing India's national economic indicators including GDP, inflation, fiscal data, and more. Features complete user authentication, profile management, dark mode, PDF report generation, and email notifications.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Features Guide](#-features-guide)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & User Management
- ✅ Complete signup/login system with JWT authentication
- ✅ Protected routes with middleware
- ✅ User profile management (name, email, phone, organization)
- ✅ Secure password change with validation
- ✅ Email uniqueness validation

### 📊 Dashboard & Analytics
- ✅ **Overview Dashboard**: Real-time economic metrics with interactive charts
- ✅ **GDP Analysis**: Detailed GDP trends and sectoral breakdown
- ✅ **Fiscal Data**: Government budget and deficit tracking
- ✅ **Reports Page**: Downloadable PDF reports with filters
- ✅ **Interactive Charts**: Built with Recharts (Line, Area, Bar charts)
- ✅ **Recent Updates Feed**: Real-time activity tracking

### ⚙️ Settings & Preferences
- ✅ **Profile Settings**: Update personal information
- ✅ **Security**: Change password with current password verification
- ✅ **Notifications**: Configure email, push, and report preferences
- ✅ **Appearance**: Dark/Light mode toggle, language, timezone selection
- ✅ **Theme Persistence**: Settings saved to database and localStorage

### 📄 Reports & Documents
- ✅ Dynamic PDF generation with PDFKit
- ✅ Professional report formatting
- ✅ Filter by type (GDP, Inflation, Fiscal, Trade, Employment)
- ✅ Filter by period (Yearly, Quarterly, Monthly)
- ✅ One-click download functionality

### 📧 Contact System
- ✅ Contact form with email integration
- ✅ Admin notification emails
- ✅ User confirmation emails
- ✅ Form validation and error handling
- ✅ FAQ section

### 🎨 UI/UX
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Dark mode support across entire application
- ✅ Modern gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Professional dashboard layout with sidebar
- ✅ Toast notifications for user actions
- ✅ Loading states and error messages

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **PDFKit** - PDF generation
- **CORS** - Cross-origin resource sharing

---

## 📁 Project Structure

```
national-accounts-dashboard/
├── client/                          # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardLayout.jsx       # Sidebar + main layout
│   │   │   ├── StatsCard.jsx             # Reusable metric cards
│   │   │   ├── OverviewChart.jsx         # Chart component
│   │   │   ├── RecentUpdates.jsx         # Activity feed
│   │   │   ├── Navbar.jsx                # Top navigation
│   │   │   └── ProtectedRoute.jsx        # Route protection
│   │   ├── pages/
│   │   │   ├── Home.jsx                  # Landing page
│   │   │   ├── Login.jsx                 # Login page
│   │   │   ├── Signup.jsx                # Registration (6 fields)
│   │   │   ├── Dashboard.jsx             # Main dashboard
│   │   │   ├── GDPAnalysis.jsx           # GDP detailed view
│   │   │   ├── FiscalData.jsx            # Fiscal metrics
│   │   │   ├── Reports.jsx               # PDF downloads
│   │   │   ├── Settings.jsx              # User settings (4 tabs)
│   │   │   └── ContactUs.jsx             # Contact form
│   │   ├── context/
│   │   │   ├── AuthContext.jsx           # Auth state management
│   │   │   └── ThemeContext.jsx          # Dark mode management
│   │   ├── services/
│   │   │   └── api.js                    # API calls
│   │   ├── data/
│   │   │   └── dashboardData.js          # Dummy data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                          # Backend (Node.js + Express)
    ├── config/
    │   └── db.js                         # MongoDB connection
    ├── models/
    │   └── User.js                       # User schema with preferences
    ├── routes/
    │   ├── auth.js                       # Auth routes
    │   ├── user.js                       # User management routes
    │   ├── contact.js                    # Contact form route
    │   └── reports.js                    # Report download route
    ├── middleware/
    │   └── auth.js                       # JWT verification
    ├── controllers/
    │   ├── authController.js             # Auth logic
    │   ├── userController.js             # Profile/preferences
    │   ├── contactController.js          # Email sending
    │   └── reportController.js           # PDF generation
    ├── .env
    ├── package.json
    └── server.js
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (Atlas account or local installation)
- **Git**
- **Gmail account** (for email features) or other email service

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

# Packages installed:
# express, mongoose, bcryptjs, jsonwebtoken, dotenv, cors, nodemailer, pdfkit
```

### Step 3: Frontend Setup

```bash
# Navigate to client folder
cd ../client

# Install dependencies
npm install

# Packages installed:
# react, react-router-dom, axios, recharts, lucide-react, tailwindcss
```

---

## 🔐 Environment Setup

### Backend Environment Variables

Create `server/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/national-accounts?retryWrites=true&w=majority

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long

# Email Configuration (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
ADMIN_EMAIL=admin@nationalaccounts.gov.in
```

### Frontend Environment Variables

Create `client/.env`:

```env
# API URL
VITE_API_URL=http://localhost:5000/api
```

### MongoDB Atlas Setup

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create Cluster**: Free tier (M0 Sandbox)
3. **Database Access**: Create user with password
4. **Network Access**: Add IP `0.0.0.0/0` (allow from anywhere) or your specific IP
5. **Connect**: Get connection string and add to `MONGODB_URI`

### Gmail Setup for Email Features

1. **Enable 2-Factor Authentication**:
   - Google Account → Security → 2-Step Verification

2. **Generate App Password**:
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy 16-character password
   - Use in `EMAIL_PASS`

**Important**: Never use your actual Gmail password. Always use App Passwords.

---

## ▶️ Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
# App runs on http://localhost:3000
```

### Production Build

**Frontend:**
```bash
cd client
npm run build
# Creates optimized build in dist/
```

**Backend:**
```bash
cd server
npm start
# Runs with node (not nodemon)
```

---

## 📡 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://your-backend.com/api
```

### Authentication Endpoints

#### 1. Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "password": "password123"
}

Response: {
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "token": "jwt_token_here"
}
```

#### 2. Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "token": "jwt_token_here"
}
```

#### 3. Get Current User
```http
GET /api/auth/me
Authorization: Bearer {token}

Response: {
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "organization": "Tech Corp",
  "role": "user",
  "preferences": { ... }
}
```

### User Management Endpoints

#### 4. Update Profile
```http
PUT /api/user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "organization": "New Corp"
}

Response: {
  "_id": "...",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "organization": "New Corp",
  "role": "user"
}
```

#### 5. Change Password
```http
PUT /api/user/password
Authorization: Bearer {token}
Content-Type: application/json

{
  "currentPassword": "oldpass123",
  "newPassword": "newpass123"
}

Response: {
  "message": "Password changed successfully"
}
```

#### 6. Update Preferences
```http
PUT /api/user/preferences
Authorization: Bearer {token}
Content-Type: application/json

{
  "notifications": {
    "emailNotifications": true,
    "pushNotifications": false,
    "weeklyReport": true,
    "dataUpdates": true
  },
  "appearance": {
    "darkMode": true,
    "language": "en",
    "timezone": "Asia/Kolkata"
  }
}

Response: {
  "message": "Preferences updated successfully",
  "preferences": { ... }
}
```

### Contact Endpoint

#### 7. Send Contact Message
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "I need help with..."
}

Response: {
  "message": "Message sent successfully"
}
```

### Reports Endpoint

#### 8. Download Report
```http
GET /api/reports/download/{reportId}
Authorization: Bearer {token}

Response: PDF file download
```

---

## 📖 Features Guide

### 1. User Registration

**Steps:**
1. Go to `/signup`
2. Fill all 6 required fields:
   - Full Name
   - Email Address
   - Phone Number
   - Organization
   - Password (min 6 characters)
   - Confirm Password
3. Click "Sign Up"
4. Automatically logged in and redirected to dashboard

**Validation:**
- All fields required
- Email format validation
- Email uniqueness check
- Password minimum 6 characters
- Passwords must match

### 2. User Login

**Steps:**
1. Go to `/login`
2. Enter email and password
3. Click "Sign In"
4. Redirected to dashboard

### 3. Dashboard Navigation

**Sidebar Menu:**
- **Overview**: Main dashboard with key metrics and charts
- **GDP Analysis**: Detailed GDP trends and sectoral data
- **Fiscal Data**: Government budget and deficit information
- **Reports**: Downloadable PDF reports with filters
- **Settings**: User preferences and account management

### 4. Profile Management

**Accessing Settings:**
1. Click sidebar → Settings
2. Go to "Profile" tab

**Updating Profile:**
1. Modify any field (name, email, phone, organization)
2. Click "Save Changes"
3. Success message appears
4. Navbar updates immediately
5. Changes persist across all pages

### 5. Password Change

**Steps:**
1. Settings → Security tab
2. Enter current password
3. Enter new password (min 6 characters)
4. Confirm new password
5. Click "Update Password"
6. Success message confirms change

**Security:**
- Current password verified before update
- Password encrypted with bcrypt
- New password must be different
- Minimum 6 characters enforced

### 6. Dark Mode

**Enabling Dark Mode:**
1. Settings → Appearance tab
2. Toggle "Dark Mode" switch
3. Entire app switches to dark theme
4. Preference saved to database and localStorage
5. Persists across sessions

**Features:**
- All pages support dark mode
- Charts readable in both modes
- Smooth transition animations
- Works on all devices

### 7. Notification Preferences

**Configuring Notifications:**
1. Settings → Notifications tab
2. Toggle any of 4 options:
   - Email Notifications
   - Push Notifications
   - Weekly Reports
   - Data Updates
3. Changes save automatically
4. Success message confirms save

### 8. Downloading Reports

**Steps:**
1. Dashboard → Reports (sidebar)
2. Use filters:
   - Report Type (GDP, Inflation, etc.)
   - Time Period (Yearly, Quarterly, Monthly)
3. Click "Download PDF" on any report
4. PDF generates and downloads automatically

**PDF Contents:**
- Professional header with logo
- Report title and metadata
- Executive summary
- Key metrics and data
- Sectoral breakdown (if applicable)
- Footer with organization info

### 9. Contact Form

**Sending Message:**
1. Click "Contact" in navbar
2. Fill form:
   - Full Name
   - Email Address
   - Subject
   - Message
3. Click "Send Message"
4. Success notification appears
5. Admin receives email
6. User receives confirmation email

---

## 🌐 Deployment

### Backend Deployment (Railway/Render)

#### Using Railway

1. **Setup:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
cd server
railway init
```

2. **Configure:**
   - Add environment variables in Railway dashboard
   - Connect MongoDB Atlas
   - Deploy automatically from GitHub

3. **Environment Variables:**
```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_production_secret
EMAIL_USER=production_email@gmail.com
EMAIL_PASS=production_app_password
ADMIN_EMAIL=admin@domain.com
NODE_ENV=production
```

#### Using Render

1. Go to [Render.com](https://render.com)
2. New Web Service
3. Connect GitHub repository
4. Settings:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables
6. Deploy

### Frontend Deployment (Vercel)

#### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd client
vercel
```

#### Using Vercel Dashboard

1. Go to [Vercel.com](https://vercel.com)
2. Import GitHub repository
3. Framework: **Vite**
4. Root Directory: `client`
5. Environment Variable:
```env
VITE_API_URL=https://your-backend.railway.app/api
```
6. Deploy

### Post-Deployment Checklist

- [ ] Test signup and login
- [ ] Verify profile updates work
- [ ] Test password change
- [ ] Check dark mode works
- [ ] Test PDF downloads
- [ ] Verify email sending works
- [ ] Test all dashboard pages
- [ ] Check mobile responsiveness
- [ ] Verify HTTPS is enabled
- [ ] Test CORS configuration

---

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