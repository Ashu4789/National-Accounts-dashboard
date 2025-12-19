import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Settings,
  Menu,
  X,
  Package,
  MapPin,
  Users
} from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard className="h-5 w-5" />, path: '/dashboard' },
    { name: 'GDP Analysis', icon: <TrendingUp className="h-5 w-5" />, path: '/dashboard/gdp' },
    { name: 'Fiscal Data', icon: <DollarSign className="h-5 w-5" />, path: '/dashboard/fiscal' },
    { name: 'Trade & BoP', icon: <Package className="h-5 w-5" />, path: '/dashboard/trade' },
    { name: 'State GDP', icon: <MapPin className="h-5 w-5" />, path: '/dashboard/states' },
    { name: 'Employment', icon: <Users className="h-5 w-5" />, path: '/dashboard/employment' },
    { name: 'Reports', icon: <FileText className="h-5 w-5" />, path: '/dashboard/reports' },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, path: '/dashboard/settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar (collapsed icons by default, expands on hover) */}
      <aside
        className={`group fixed lg:static inset-y-0 left-0 z-50 w-20 lg:w-20 ${sidebarOpen ? 'w-64' : ''} lg:hover:w-64 bg-white/6 dark:bg-gray-900/30 backdrop-blur-md border-r border-gray-200/10 dark:border-gray-700/20 shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="flex items-center space-x-3">
              <LayoutDashboard className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="hidden lg:inline-block lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-200 text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap overflow-hidden">Dashboard</span>
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center lg:space-x-3 px-4 py-3 rounded-lg transition-colors justify-center lg:justify-start ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold pl-3 border-l-4 border-blue-600 lg:pl-4'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="hidden lg:inline-block lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-x-0 transition-all duration-200 whitespace-nowrap overflow-hidden">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer (hidden when collapsed, reveals on hover) */}
          <div className="p-4 border-t lg:opacity-0 lg:group-hover:opacity-100 lg:max-h-0 lg:group-hover:max-h-40 overflow-hidden transition-all duration-300 pointer-events-none lg:group-hover:pointer-events-auto">
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-200/10">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-1">
                Need Help?
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-100">
                Check our documentation for guides and tutorials
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden pt-20 lg:pt-8">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white/6 dark:bg-gray-900/30 backdrop-blur-sm border-b border-gray-200/8 dark:border-gray-700/16 shadow-sm px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-lg font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;