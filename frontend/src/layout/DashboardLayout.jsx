import { MdDashboard, MdSettings, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col justify-between border-r">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-blue-700">
            EV Monitor
          </h2>
          <p className="text-[13px] text-gray-500 mt-1">
            Smart Device Dashboard
          </p>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-6 text-[15px] font-medium text-gray-700">
            <button
              onClick={() => navigate("/devices")}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <MdDashboard size={20} /> Dashboard
            </button>

            <button
              onClick={() => navigate("/settings")}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <MdSettings size={20} /> Settings
            </button>
          </nav>
        </div>

        {/* Logout */}
        <button
          className="flex items-center gap-3 text-red-600 hover:text-red-800 font-semibold transition"
          onClick={logout}
        >
          <MdLogout size={20} /> Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
