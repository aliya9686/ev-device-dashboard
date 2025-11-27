



import StatusBadge from "./StatusBadge";

export default function DeviceDetailsPanel({ device, onClose }) {
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 border-l z-50">
      <button className="mb-4 underline" onClick={onClose}>
        Close
      </button>
      <h2 className="font-bold text-xl mb-2">{device.name}</h2>
      <p>Device ID: {device.deviceId}</p>
      <p>Temperature: {device.temperature ?? "N/A"}°C</p>
      <p>Voltage: {device.voltage ?? "N/A"}V</p>
      <div className="mt-3">
        <StatusBadge status={device.status} />
      </div>
    </div>
  );
}
