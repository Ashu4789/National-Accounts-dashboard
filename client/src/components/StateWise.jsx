import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const StateGDPChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        State-wise GDP (USD Billion)
      </h2>

     <ResponsiveContainer width="100%" height={450}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    
    <XAxis
      dataKey="state"
      interval={0}
      angle={-45}
      textAnchor="end"
      height={100}
      tick={{ fontSize: 11 }}
    />

    <YAxis />
    <Tooltip />
    <Bar dataKey="GDP" fill="#2563eb" />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
};

export default StateGDPChart;
