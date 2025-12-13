import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    {
      title: 'GDP Growth',
      value: '+5.2%',
      change: '+0.5%',
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      color: 'bg-green-100'
    },
    {
      title: 'Inflation Rate',
      value: '3.1%',
      change: '-0.2%',
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      color: 'bg-blue-100'
    },
    {
      title: 'Employment',
      value: '96.5%',
      change: '+0.3%',
      icon: <Users className="h-8 w-8 text-purple-600" />,
      color: 'bg-purple-100'
    },
    {
      title: 'Trade Balance',
      value: '$2.4B',
      change: '+$0.1B',
      icon: <Activity className="h-8 w-8 text-orange-600" />,
      color: 'bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of national economic indicators
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  {stat.icon}
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              GDP Trend
            </h3>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">Chart visualization placeholder</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Economic Indicators
            </h3>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">Chart visualization placeholder</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recent Updates
          </h3>
          <div className="space-y-3">
            {[
              'GDP data updated for Q4 2024',
              'New employment statistics released',
              'Trade balance report published',
              'Inflation figures revised'
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;