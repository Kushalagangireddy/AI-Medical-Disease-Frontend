 import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">

      <div className="welcome-overlay"></div>

      <div className="welcome-card">

        <h1>HealthPredict</h1>

        <p>
          AI-Powered Medical Disease Prediction System
        </p>

        <button onClick={() => navigate("/login")}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Welcome;