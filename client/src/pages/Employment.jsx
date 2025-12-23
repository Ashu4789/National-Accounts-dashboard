import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { Users, TrendingDown, Briefcase, UserCheck } from 'lucide-react';
import { employmentData, currentStats } from '../data/realIndiaData';

const Employment = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Employment Statistics</h1>
        <p className="text-muted-foreground mt-2">
          Labor force participation, employment trends, and unemployment analysis
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Labor Force"
          value="52.4"
          suffix="Crore"
          change="+1.0%"
          changeType="positive"
          icon={<Users className="h-8 w-8" />}
          iconBgColor="bg-blue-500/20"
          iconColor="text-blue-500"
          description="Total Labor Force 2023-24"
        />

        <StatsCard
          title="Employed"
          value="49.2"
          suffix="Crore"
          change="+1.0%"
          changeType="positive"
          icon={<UserCheck className="h-8 w-8" />}
          iconBgColor="bg-primary/20"
          iconColor="text-primary"
          description="Employed Workforce"
        />

        <StatsCard
          title="Unemployment Rate"
          value={currentStats.unemployment.value}
          suffix={currentStats.unemployment.suffix}
          change={currentStats.unemployment.change}
          changeType={currentStats.unemployment.changeType}
          icon={<TrendingDown className="h-8 w-8" />}
          iconBgColor="bg-destructive/20"
          iconColor="text-destructive"
          description={currentStats.unemployment.description}
        />

        <StatsCard
          title="Labor Force Participation"
          value="46.8"
          suffix="%"
          change="+0.4%"
          changeType="positive"
          icon={<Briefcase className="h-8 w-8" />}
          iconBgColor="bg-blue-500/20"
          iconColor="text-blue-500"
          description="LFPR 2023-24"
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={employmentData}
          title="Unemployment Rate Trend (%)"
          dataKey="rate"
          color="#ef4444"
          type="line"
        />

        <OverviewChart
          data={employmentData}
          title="Labor Force (Crore)"
          dataKey="laborForce"
          color="#10b981"
          type="area"
        />
      </div>

      {/* Employment Table */}
      <div className="bg-card border border-border/50 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-6">
          Employment Statistics Over Years
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-muted-foreground">Year</th>
                <th className="px-4 py-3 text-right text-muted-foreground">Labor Force</th>
                <th className="px-4 py-3 text-right text-muted-foreground">Employed</th>
                <th className="px-4 py-3 text-right text-muted-foreground">Unemployed</th>
                <th className="px-4 py-3 text-right text-muted-foreground">U-Rate %</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border/50">
              {employmentData.map((item, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-foreground font-medium">
                    {item.year}
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {item.laborForce} Cr
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {item.employed} Cr
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {item.unemployed} Cr
                  </td>

                  <td className="px-4 py-3 text-right">
                    <span
                      className={`font-semibold ${item.rate < 7
                          ? 'text-emerald-500'
                          : 'text-destructive'
                        }`}
                    >
                      {item.rate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">
          Employment Insights
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Positive Trends
            </h4>

            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Unemployment decreased from 7.8% to 6.1%
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Labor force increased to 52.4 crore
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Workforce added 1 crore+
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Strong recovery post-COVID
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Sectoral Employment
            </h4>

            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                42% workforce in agriculture
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Services leading job growth
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Manufacturing recovering steadily
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                IT & digital driving urban jobs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employment;
