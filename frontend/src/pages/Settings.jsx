import { useState, useEffect } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";

export default function Settings() {
  const storedEmail = localStorage.getItem("userEmail") || "";
  const [email, setEmail] = useState(storedEmail);
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSave = () => {
    if (!email.trim()) {
      setSuccessMessage("Email cannot be empty!");
      return;
    }
    if (password.trim().length > 0 && password.length < 6) {
      setSuccessMessage("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("userEmail", email);
    setSuccessMessage("Account updated successfully!");
    setPassword("");
  };

  useEffect(() => {
    setTimeout(() => setSuccessMessage(""), 3000);
  }, [successMessage]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-5 mb-8">
        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
          {email ? email[0].toUpperCase() : "U"}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{email || "User"}</h3>
          <p className="text-gray-500 text-sm">EV Dashboard Member</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg space-y-5">
        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2 mb-1">
            <MdEmail /> Email
          </label>
          <input
            type="email"
            value={email}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2 mb-1">
            <MdLock /> New Password
          </label>
          <input
            type="password"
            value={password}
            placeholder="Enter new password (optional)"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
        >
          Save Changes
        </button>

        {successMessage && (
          <p className="text-green-600 font-medium text-sm mt-2 text-center">
            {successMessage}
          </p>
        )}
      </div>
    </DashboardLayout>
  );
}
