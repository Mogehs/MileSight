import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setIsLoading(true);
    const userData = { username, email, password };
    const USER_API = import.meta.env.VITE_USER_API_END_POINT;

    try {
      const response = await axios.post(`${USER_API}/register`, userData, {
        withCredentials: true,
      });

      if (response.status === 201) {
        toast.success("Registration successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/login"), 2000); // Redirect after toast
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!", {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#7CCA9A] p-6">
      <ToastContainer />
      <div className="bg-white/50 rounded-lg shadow-lg px-8 pb-8 max-w-md w-full items-center backdrop-blur-lg">
        <center>
          <img src="/Nexyos.png" alt="Logo" className="h-30 rounded-md" />
        </center>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00667C]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Register Button */}
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#00667C] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="w-5 h-5 border-4 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00667C] font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
