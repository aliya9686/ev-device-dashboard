import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TrendsChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <h3 className="font-semibold mb-4 text-lg">Voltage Trend</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="deviceId" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="voltage"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
