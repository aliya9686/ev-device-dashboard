// import StatusBadge from "./StatusBadge";

// export default function DeviceCard({ device, onClick }) {
//   return (
//     <div
//       className="border p-4 rounded shadow cursor-pointer hover:bg-gray-100"
//       onClick={onClick}
//     >
//       <div className="flex justify-between">
//         <h2 className="font-semibold">{device.name}</h2>
//         <StatusBadge status={device.status} />
//       </div>

//       {device.temperature !== null && (
//         <p>Temp: {device.temperature}°C</p>
//       )}
//       {device.voltage !== null && (
//         <p>Voltage: {device.voltage}V</p>
//       )}
//     </div>
//   );
// }

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
