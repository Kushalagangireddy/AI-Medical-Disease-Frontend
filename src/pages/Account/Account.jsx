 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Account.css";

function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      // Get logged-in user from localStorage
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      const loggedInUser = JSON.parse(storedUser);

      console.log("LOGGED IN USER:", loggedInUser);

      // Get email from login response
      const email = loggedInUser.email;

      if (!email) {
        alert("User email not found.");
        navigate("/login");
        return;
      }

      // Get account details
      const response = await axios.get(
        `http://localhost:8081/account?email=${encodeURIComponent(email)}`
      );

      console.log("ACCOUNT RESPONSE:", response.data);

      setUser(response.data);

    } catch (error) {
      console.error("ACCOUNT ERROR:", error);
      console.error("STATUS:", error.response?.status);
      console.error("BACKEND RESPONSE:", error.response?.data);

      alert("Failed to load account details.");

    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="account-container">

      <div className="account-card">

        <h1>My Account</h1>

        <p className="account-subtitle">
          Your HealthPredict account details
        </p>

        {loading ? (
          <p>Loading account details...</p>
        ) : user ? (

          <div className="account-info">

            {/* Full Name */}
            <div className="info-item">
              <strong>Full Name</strong>
              <span>
                {user.fullName}
              </span>
            </div>

            {/* Email */}
            <div className="info-item">
              <strong>Email</strong>
              <span>
                {user.email}
              </span>
            </div>

            {/* Account Status */}
            <div className="info-item">
              <strong>Account Status</strong>

              <span className="active">
                Active
              </span>
            </div>

          </div>

        ) : (

          <p>
            Account details not found.
          </p>

        )}

        <div className="account-buttons">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

          <button
            className="logout-account-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Account;