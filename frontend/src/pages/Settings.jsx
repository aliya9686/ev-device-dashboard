import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

export default function Settings() {
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [password, setPassword] = useState("");

  const saveSettings = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
        <label className="block mb-3">
          <p className="font-medium mb-1">Email</p>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <p className="font-medium mb-1">Password</p>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={saveSettings}
        >
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
}
