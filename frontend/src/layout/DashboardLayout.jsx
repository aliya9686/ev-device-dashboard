// export default function DashboardLayout({ children }) {
//   return (
//     <div className="flex h-screen bg-gray-100 text-gray-900">
      
//       {/* Sidebar */}
//       <aside className="w-60 bg-white shadow-lg p-6 flex flex-col gap-6">
//         <h2 className="font-bold text-xl tracking-wide">EV Dashboard</h2>

//         <nav className="flex flex-col gap-3 text-sm">
//           <a className="hover:text-blue-600 cursor-pointer">Devices</a>
//           <a className="hover:text-blue-600 cursor-pointer">Analytics</a>
//           <a className="hover:text-blue-600 cursor-pointer">Reports</a>
//           <a className="hover:text-blue-600 cursor-pointer">Settings</a>
//         </nav>
//       </aside>

//       {/* Content section */}
//       <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
//         {children}
//       </main>
//     </div>
//   );
// }

import { MdDashboard, MdDevices, MdAnalytics, MdSettings } from "react-icons/md";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
        <h2 className="font-bold text-xl tracking-wide">EV Dashboard</h2>

        <nav className="flex flex-col gap-5 text-[15px] font-medium">
          <div className="flex items-center gap-3 text-blue-600 cursor-pointer">
            <MdDashboard size={20} /> Dashboard
          </div>
          <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
            <MdDevices size={20} /> Devices
          </div>
          <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
            <MdAnalytics size={20} /> Analytics
          </div>
          <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
            <MdSettings size={20} /> Settings
          </div>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
