import StatusBadge from "./StatusBadge";

export default function DeviceDetailsPanel({ device, onClose }) {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 border-l">
      <button className="mb-4 underline" onClick={onClose}>
        Close
      </button>
      <h2 className="font-bold text-lg mb-2">{device.name}</h2>
      <p>Device ID: {device.deviceId}</p>
      <p>Temperature: {device.temperature ?? "N/A"}</p>
      <p>Voltage: {device.voltage ?? "N/A"}</p>
      <p>Status: <StatusBadge status={device.status} /></p>
    </div>
  );
}


