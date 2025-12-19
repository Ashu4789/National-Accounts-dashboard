import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import GDPAnalysis from './pages/GDPAnalysis';
import FiscalData from './pages/FiscalData';
import TradeData from './pages/TradeData';
import StateGDP from './pages/StateGDP';
import Employment from './pages/Employment';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<ContactUs />} />
              
              {/* Protected Dashboard Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/gdp"
                element={
                  <ProtectedRoute>
                    <GDPAnalysis />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/fiscal"
                element={
                  <ProtectedRoute>
                    <FiscalData />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/trade"
                element={
                  <ProtectedRoute>
                    <TradeData />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/states"
                element={
                  <ProtectedRoute>
                    <StateGDP />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/employment"
                element={
                  <ProtectedRoute>
                    <Employment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;