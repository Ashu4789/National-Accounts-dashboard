import DashboardLayout from '../components/DashboardLayout';
import { stateGDP, perCapitaIncome } from '../data/realIndiaData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, TrendingUp, Users } from 'lucide-react';

const StateGDP = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">State-wise Economic Data</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Gross Domestic Product and Per Capita Income analysis across Indian states
        </p>
      </div>

      {/* State GDP Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Top 10 States by GDP (Rs. Crore)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stateGDP} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis dataKey="state" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} width={120} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
            <Bar dataKey="gdp" fill="#3b82f6" name="GDP (Rs. Crore)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* State Details Table */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* GDP Contribution Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">State GDP Contribution</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">State</th>
                  <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Share %</th>
                  <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Growth %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {stateGDP.map((state, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{state.state}</td>
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{state.share}%</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-green-600 dark:text-green-400 font-semibold">
                        +{state.growth}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Per Capita Income Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Top States by Per Capita Income</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">State</th>
                  <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Income (Rs.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {perCapitaIncome.map((state, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold">
                        {state.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{state.state}</td>
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">
                      ₹{state.income.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">State Economy Insights</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Top Contributors</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Top 5 states (Maharashtra, Tamil Nadu, Gujarat, Karnataka, UP) contribute 45.5% of India's GDP
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Fastest Growing</h4>
            <p className="text-sm text-green-700 dark:text-green-400">
              Karnataka (10.2%), Telangana (9.8%), and Gujarat (8.5%) lead in growth rates
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Per Capita Leaders</h4>
            <p className="text-sm text-purple-700 dark:text-purple-400">
              Goa, Delhi, and Sikkim have the highest per capita income above ₹4.8 lakh
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StateGDP;