 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/auth/login",
        null,
        {
          params: {
            email: email,
            password: password,
          },
        }
      );

      console.log("LOGIN SUCCESS:", response.data);

      alert("Login successful!");

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      navigate("/home");

    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("STATUS:", error.response?.status);

      console.log(
        "BACKEND RESPONSE:",
        JSON.stringify(error.response?.data, null, 2)
      );

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Login</h1>

        <p>
          Login to your HealthPredict account
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="register-text">
          Don't have an account?

          <span
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;