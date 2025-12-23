import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OverviewChart = ({ data, title, dataKey, color = '#3b82f6', type = 'line' }) => {
  // Custom tooltip for better UX
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover p-4 rounded-lg shadow-lg border border-border">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-bold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">{title}</h3>

      <ResponsiveContainer width="100%" height={300}>
        {type === 'area' ? (
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--muted-foreground)', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Legend
              wrapperStyle={{ fontSize: '14px', paddingTop: '20px', color: 'var(--foreground)' }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#color${dataKey})`}
              name={title}
            />
          </AreaChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="currentColor"
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--muted-foreground)', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Legend
              wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name={title}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;