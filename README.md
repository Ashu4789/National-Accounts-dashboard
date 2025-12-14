# 🇮🇳 National Accounts Dashboard - MERN Stack

A comprehensive dashboard for monitoring India's national economic indicators including GDP, inflation, and fiscal data.

## 📋 Features

- ✅ User Authentication (Login/Signup)
- ✅ Protected Dashboard Routes
- ✅ Real-time Economic Data Visualization
- ✅ Interactive Charts (Recharts)
- ✅ Responsive Sidebar Navigation
- ✅ GDP Analysis Page
- ✅ Fiscal Data Monitoring
- ✅ Recent Updates Feed
- ✅ Mobile Responsive Design

## 🏗️ Project Structure

```
national-accounts-dashboard/
├── client/                         # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardLayout.jsx    # Sidebar + content layout
│   │   │   ├── StatsCard.jsx          # Reusable metric cards
│   │   │   ├── OverviewChart.jsx      # Chart component
│   │   │   ├── RecentUpdates.jsx      # Updates feed
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx          # Main dashboard
│   │   │   ├── GDPAnalysis.jsx        # GDP detailed view
│   │   │   └── FiscalData.jsx         # Fiscal metrics
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── data/
│   │   │   └── dashboardData.js       # Dummy data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── server/                         # Backend (Node.js + Express)
    ├── config/
    │   └── db.js
    ├── models/
    │   └── User.js
    ├── routes/
    │   └── auth.js
    ├── middleware/
    │   └── auth.js
    ├── controllers/
    │   └── authController.js
    ├── server.js
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account (MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd national-accounts-dashboard
```

### 2. Backend Setup

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to `server/.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development
```

**Get MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (or your specific IP)
5. Click "Connect" → "Connect your application"
6. Copy the connection string

### 3. Frontend Setup

```bash
# Navigate to client folder (from root)
cd client

# Install dependencies
npm install

# Install Recharts for charts
npm install recharts

# Create .env file
touch .env
```

Add the following to `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

Visit: `http://localhost:3000`

## 📊 Dashboard Features

### Main Dashboard (`/dashboard`)
- **Key Metrics Cards:**
  - Current GDP (Billion USD)
  - GDP Growth Rate (%)
  - Inflation Rate (%)
  - Fiscal Deficit (% of GDP)
- **Charts:**
  - GDP Trend (Area Chart)
  - GDP Growth Rate (Line Chart)
  - Inflation Rate (Line Chart)
  - Fiscal Deficit (Area Chart)
- **Recent Updates Feed**

### GDP Analysis (`/dashboard/GDP`)
- Sector-wise GDP contribution
- GDP value trends
- Growth rate analysis

### Fiscal Data (`/dashboard/fiscal`)
- Fiscal deficit trends
- Revenue deficit
- Public debt metrics
- Key fiscal highlights

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (Protected)

## 📱 Responsive Design

The dashboard is fully responsive with:
- Mobile hamburger menu
- Collapsible sidebar on tablets
- Full sidebar on desktop
- Adaptive chart sizes
- Touch-friendly interface

## 🚀 Deployment

### Backend (Railway/Render)

**Using Railway:**
1. Push code to GitHub
2. Go to [Railway.app](https://railway.app)
3. New Project → Deploy from GitHub
4. Select `server` folder
5. Add environment variables
6. Deploy

**Using Render:**
1. Go to [Render.com](https://render.com)
2. New Web Service
3. Connect repository
4. Root directory: `server`
5. Build: `npm install`
6. Start: `npm start`
7. Add environment variables

### Frontend (Vercel)

```bash
cd client
npm install -g vercel
vercel login
vercel
```

**Or use Vercel Dashboard:**
1. Import repository
2. Framework: Vite
3. Root directory: `client`
4. Add env variable: `VITE_API_URL=<your-backend-url>/api`
5. Deploy

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend.railway.app/api
```

## 🎯 Future Enhancements

- [ ] Real-time data integration with government APIs
- [ ] Export data to PDF/Excel
- [ ] Advanced filtering and date ranges
- [ ] User role management (Admin/Viewer)
- [ ] Email notifications for updates
- [ ] Comparative analysis tools
- [ ] Historical data archives
- [ ] Custom dashboard widgets

## 🐛 Troubleshooting

**MongoDB Connection Failed:**
- Check MONGODB_URI is correct
- Verify network access settings in MongoDB Atlas
- Ensure database user has proper permissions

**CORS Error:**
- Verify backend has `cors()` middleware
- Check API URL in frontend .env

**Charts Not Rendering:**
- Ensure Recharts is installed: `npm install recharts`
- Check browser console for errors

**Login/Signup Not Working:**
- Verify backend is running
- Check JWT_SECRET is set
- Inspect network tab for API errors

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 👨‍💻 Author

Built with ❤️ using MERN Stack

---

**Happy Coding! 🚀**