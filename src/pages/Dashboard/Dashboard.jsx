 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [totalPredictions, setTotalPredictions] = useState(0);
  const [latestPrediction, setLatestPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Get total predictions
      const totalResponse = await axios.get(
        "http://localhost:8081/prediction/total"
      );

      setTotalPredictions(totalResponse.data);

      // Get latest prediction
      const latestResponse = await axios.get(
        "http://localhost:8081/prediction/latest"
      );

      setLatestPrediction(latestResponse.data);

      console.log("TOTAL:", totalResponse.data);
      console.log("LATEST:", latestResponse.data);

    } catch (error) {
      console.error("Dashboard error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">

        <div>
          <h1>Welcome to HealthPredict</h1>

          <p>
            Your AI-powered healthcare dashboard
          </p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>


      {/* Loading */}
      {loading ? (
        <p>Loading dashboard...</p>
      ) : (

        <div className="dashboard-cards">

          {/* Predict Disease */}
          <div className="dashboard-card">

            <h2>Predict Disease</h2>

            <p>
              Enter your symptoms and get an AI-based
              disease prediction.
            </p>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/predict")}
            >
              Start Prediction
            </button>

          </div>


          {/* Prediction Statistics */}
          <div className="dashboard-card">

            <h2>Prediction Statistics</h2>

            <h3>
              {totalPredictions}
            </h3>

            <p>
              Total Predictions
            </p>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/history")}
            >
              View History
            </button>

          </div>


          {/* Latest Prediction */}
          <div className="dashboard-card">

            <h2>Latest Prediction</h2>

            {latestPrediction ? (
              <>

                <p>
                  <strong>Disease:</strong>{" "}
                  {latestPrediction.disease}
                </p>

                <p>
                  <strong>Confidence:</strong>{" "}
                  {latestPrediction.confidence}
                </p>

                <p>
                  <strong>Symptoms:</strong>{" "}
                  {latestPrediction.symptoms}
                </p>

              </>
            ) : (
              <p>
                No predictions available.
              </p>
            )}

          </div>


          {/* My Account */}
          <div className="dashboard-card">

            <h2>My Account</h2>

            <p>
              View your HealthPredict account details.
            </p>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/account")}
            >
              Account Details
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Dashboard;