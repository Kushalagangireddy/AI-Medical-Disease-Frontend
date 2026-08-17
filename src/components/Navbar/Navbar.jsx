 import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/home">
          <h2>🩺 HealthPredict</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/predict">Predict</Link>
        </li>

        <li>
          <Link to="/history">History</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        {/* Logout */}
        <li>
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;