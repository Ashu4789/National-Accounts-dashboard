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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center bg-blue-700 text-white rounded-2xl p-12 shadow-md">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="block">National Accounts</span>
            <span className="block text-white/95 text-3xl md:text-4xl">Dashboard</span>
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Monitor, analyze, and visualize national economic data with our comprehensive dashboard platform
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-shadow shadow-md flex items-center space-x-2 text-lg font-semibold"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="bg-transparent text-white/90 px-8 py-3 rounded-full border-2 border-white/20 hover:border-white/40 transition text-lg font-semibold"
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
              className="bg-white/6 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))} 
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/6 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/20 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
              <div className="text-gray-700 dark:text-gray-300">Economic Indicators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">Real-time</div>
              <div className="text-gray-700 dark:text-gray-300">Data Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">Secure</div>
              <div className="text-gray-700 dark:text-gray-300">Authentication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
