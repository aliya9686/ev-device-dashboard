// import { useEffect, useState } from "react";
// import axios from "axios";
// import DeviceCard from "../components/DeviceCard";
// import DeviceDetailsPanel from "../components/DeviceDetailsPanel";

// export default function Devices() {
//   const [devices, setDevices] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [selectedDevice, setSelectedDevice] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchDevices = async () => {
//     try {
//       setLoading(true);
//      const url = filter
//   ? `http://localhost:5000/api/devices?status=${filter}`
//   : "http://localhost:5000/api/devices";
//       const response = await axios.get(url);
//       console.log("API Response:", response.data); 
//       setDevices(response.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDevices();
//   }, [filter]);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">EV Devices</h1>

//       <select
//         className="border p-2 mb-4"
//         onChange={(e) => setFilter(e.target.value)}
//       >
//         <option value="">All</option>
//         <option value="active">Active</option>
//         <option value="warning">Warning</option>
//         <option value="offline">Offline</option>
//       </select>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid gap-4">
//           {devices.map((device) => (
//             <DeviceCard
//               key={device.deviceId}
//               device={device}
//               onClick={() => setSelectedDevice(device)}
//             />
//           ))}
//         </div>
//       )}

//       {selectedDevice && (
//         <DeviceDetailsPanel
//           device={selectedDevice}
//           onClose={() => setSelectedDevice(null)}
//         />
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import DeviceCard from "../components/DeviceCard";
import DeviceDetailsPanel from "../components/DeviceDetailsPanel";
import DashboardLayout from "../layout/DashboardLayout";

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const url = filter
        ? `http://localhost:5000/api/devices?status=${filter}`
        : "http://localhost:5000/api/devices";
      const response = await axios.get(url);

      setDevices(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, [filter]);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">EV Device Monitoring</h1>

        <select
          className="border px-3 py-2 rounded shadow-sm bg-white"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="warning">Warning</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading devices...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {devices.map((device) => (
            <DeviceCard
              key={device.deviceId}
              device={device}
              onClick={() => setSelectedDevice(device)}
            />
          ))}
        </div>
      )}

      {selectedDevice && (
        <DeviceDetailsPanel
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
        />
      )}
    </DashboardLayout>
  );
}


