

import StatusBadge from "./StatusBadge";

export default function DeviceCard({ device, onClick }) {
  return (
    <div
      className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">{device.name}</h2>
        <StatusBadge status={device.status} />
      </div>
      <p className="text-sm">Temperature: {device.temperature ?? "N/A"}°C</p>
      <p className="text-sm">Voltage: {device.voltage ?? "N/A"}V</p>
    </div>
  );
}
