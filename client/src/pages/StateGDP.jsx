import DashboardLayout from '../components/DashboardLayout';
import { stateGDP, perCapitaIncome } from '../data/realIndiaData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, TrendingUp, Users } from 'lucide-react';

const StateGDP = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">State-wise Economic Data</h1>
        <p className="text-muted-foreground mt-2">
          Gross Domestic Product and Per Capita Income analysis across Indian states
        </p>
      </div>

      {/* State GDP Chart */}
      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-6">Top 10 States by GDP (Rs. Crore)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stateGDP} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis type="number" stroke="currentColor" className="text-muted-foreground" style={{ fontSize: '12px' }} />
            <YAxis dataKey="state" type="category" stroke="currentColor" className="text-muted-foreground" style={{ fontSize: '12px' }} width={120} />
            <Tooltip
              contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--popover-foreground)' }}
              itemStyle={{ color: 'var(--popover-foreground)' }}
            />
            <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
            <Bar dataKey="gdp" fill="#3b82f6" name="GDP (Rs. Crore)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* State Details Table */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* GDP Contribution Table */}
        <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-foreground">State GDP Contribution</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-muted-foreground font-semibold">State</th>
                  <th className="px-4 py-3 text-right text-muted-foreground font-semibold">Share %</th>
                  <th className="px-4 py-3 text-right text-muted-foreground font-semibold">Growth %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {stateGDP.map((state, index) => (
                  <tr key={index} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 text-foreground">{state.state}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{state.share}%</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-emerald-500 font-semibold">
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
        <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-bold text-foreground">Top States by Per Capita Income</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-muted-foreground font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left text-muted-foreground font-semibold">State</th>
                  <th className="px-4 py-3 text-right text-muted-foreground font-semibold">Income (Rs.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {perCapitaIncome.map((state, index) => (
                  <tr key={index} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 text-foreground">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold">
                        {state.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-foreground">{state.state}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-semibold">
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
      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-foreground">State Economy Insights</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-500/10 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Top Contributors</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Top 5 states (Maharashtra, Tamil Nadu, Gujarat, Karnataka, UP) contribute 45.5% of India's GDP
            </p>
          </div>
          <div className="bg-emerald-500/10 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">Fastest Growing</h4>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              Karnataka (10.2%), Telangana (9.8%), and Gujarat (8.5%) lead in growth rates
            </p>
          </div>
          <div className="bg-purple-500/10 rounded-lg p-4">
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