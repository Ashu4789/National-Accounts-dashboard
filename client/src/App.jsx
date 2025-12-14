import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';
import GDPAnalysis from './pages/GDPAnalysis';
import FiscalData from './pages/FiscalData';
import StateGDP from './pages/StateGDP';
import Inflation from './pages/Inflation';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
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
              path="/dashboard/GDP"
              element={
                <ProtectedRoute>
                  <GDPAnalysis />
                </ProtectedRoute>
              }
            />
            <Route
             path="/dashboard/state-GDP" 
             element={
              <ProtectedRoute>
                <StateGDP />
              </ProtectedRoute>
             } />

            <Route
              path="/dashboard/inflation"
              element={
                <ProtectedRoute>
                  <Inflation />
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
            
            {/* Placeholder routes - redirect to dashboard for now */}
            <Route
              path="/dashboard/reports"
              element={
                <ProtectedRoute>
                  <Navigate to="/dashboard" replace />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <Navigate to="/dashboard" replace />
                </ProtectedRoute>
              }
            />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;