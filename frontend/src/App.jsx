


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";

export default function App() {
  const isLoggedIn = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/devices"
          element={isLoggedIn ? <Devices /> : <Navigate to="/" />}
        />

        <Route
          path="/settings"
          element={isLoggedIn ? <Settings /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
