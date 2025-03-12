import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    const USER_API = import.meta.env.VITE_USER_API_END_POINT;

    try {
      const response = await axios.post(
        `${USER_API}/login`, // Updated route
        { email, password },
        { withCredentials: true } // Required for storing JWT in cookies
      );

      console.log(response.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#7CCA9A] p-6">
      <div className="bg-white/50 rounded-lg shadow-lg px-8 pb-8 max-w-md w-full items-center backdrop-blur-lg">
        <center>
          <img src="/Nexyos.png" alt="" className="h-30 rounded-md" />
        </center>

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
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

          {/* Login Button */}
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 bg-[#00667C] text-white font-semibold rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#00667C] font-semibold">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
