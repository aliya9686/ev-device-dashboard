

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MdElectricCar,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loginError, setLoginError] = useState("");

  const allowedEmail = "ev@gmail.com";
  const allowedPassword = "ev123456";

  const validateEmail = (value) => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) setEmailError("Email is required");
    else if (!emailRegex.test(value)) setEmailError("Enter a valid email");
    else setEmailError("");
  };

  const validatePassword = (value) => {
    setPassword(value);
    setLoginError("");

    if (!value.trim()) {
      setPasswordStrength("");
      return;
    }

    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    if (strength <= 2) setPasswordStrength("Weak");
    else if (strength === 3) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  };

  const isFormValid =
    passwordStrength === "Strong" && !emailError && email.length > 0;

  const handleLogin = () => {
    if (!isFormValid) return;

    if (
      email.toLowerCase() === allowedEmail.toLowerCase() &&
      password === allowedPassword
    ) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userEmail", email);
      navigate("/devices");
    } else {
      setLoginError("Invalid email or password. Try again!");
    }
  };

  const strengthColor = {
    Weak: "bg-red-500 w-1/3",
    Medium: "bg-orange-400 w-2/3",
    Strong: "bg-green-600 w-full",
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#CCE5CF] via-[#ABE0F0] to-[#CCE5CF]">
      <div className="bg-white shadow-xl rounded-2xl flex overflow-hidden w-[850px] h-[520px]">
        {/* Branding Section */}
        <div className="bg-gradient-to-b from-[#014459] to-[#369dbc] text-gray-800 w-1/2 flex flex-col justify-center items-center p-8">
          <MdElectricCar size={70} className="mb-4 text-gray-800" />
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            EV Monitor
          </h2>
          <p className="mt-2 text-sm text-white">Modern Fleet Monitoring</p>
        </div>

        {/* Login Form Section */}
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h1 className="text-2xl font-bold mb-1 text-gray-900 text-center">
            Sign in 
          </h1>
          <p className="text-gray-600 text-sm mb-8 text-center">
            Access your dashboard securely
          </p>

          {/* Email */}
          <div className="relative mb-5">
            <MdEmail
              className="absolute left-3 top-3 text-gray-500"
              size={20}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56A9B5]"
            />
            {emailError && (
              <p className="text-red-600 text-xs mt-1">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative mb-3">
            <MdLock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56A9B5]"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <MdVisibilityOff size={22} />
              ) : (
                <MdVisibility size={22} />
              )}
            </span>
          </div>

          {/* Password Strength */}
          {passwordStrength && (
            <>
              <div className="w-full h-2 rounded bg-gray-300 overflow-hidden">
                <div
                  className={`h-full ${strengthColor[passwordStrength]}`}
                ></div>
              </div>
              <p className="text-xs mt-1 text-gray-700">
                Strength: {passwordStrength}
              </p>
            </>
          )}

          {/* Login Button */}
          <button
            disabled={!isFormValid}
            onClick={handleLogin}
            className={`mt-6 w-full p-3 font-semibold rounded-lg transition ${
              isFormValid
                ? "bg-[#56A9B5] hover:bg-[#4B99A5] text-white shadow-md"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Login
          </button>

          {/* Invalid Credentials */}
          {loginError && (
            <p className="text-red-600 text-sm mt-3 text-center font-medium">
              {loginError}
            </p>
          )}

          <p className="text-center text-sm mt-5 text-gray-700 hover:underline cursor-pointer">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}
