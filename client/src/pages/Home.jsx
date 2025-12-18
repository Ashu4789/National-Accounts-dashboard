import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, BarChart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: 'Comprehensive Analytics',
      description: 'Track and analyze national economic indicators with real-time data visualization'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: 'Growth Insights',
      description: 'Monitor GDP, inflation, and other key economic metrics at a glance'
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: 'Secure Platform',
      description: 'Enterprise-grade security with encrypted data storage and authentication'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            National Accounts
            <span className="block text-blue-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Monitor, analyze, and visualize national economic data with our comprehensive dashboard platform
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 text-lg font-semibold"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="bg-white dark:bg-gray-700 dark:text-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition border-2 border-blue-600 text-lg font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Economic Indicators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Real-time</div>
              <div className="text-gray-600">Data Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Secure</div>
              <div className="text-gray-600">Authentication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
