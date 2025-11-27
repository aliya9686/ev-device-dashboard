import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    setPassword(value);

    if (!value.trim()) {
      setPasswordError("Password is required");
    } else if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    if (emailError || passwordError || !email || !password) return;

    localStorage.setItem("auth", "true");
    localStorage.setItem("userEmail", email);
    navigate("/devices");
  };

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-6 text-center">Login</h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-600 text-xs mt-1">{emailError}</p>
          )}
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-600 text-xs mt-1">{passwordError}</p>
          )}
        </div>

        <button
          disabled={!isFormValid}
          className={`w-full p-3 font-semibold rounded transition ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 cursor-not-allowed text-gray-700"
          }`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
