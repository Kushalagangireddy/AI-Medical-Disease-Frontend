 import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import { useNavigate } from "react-router-dom";

import Features from "./components/Features/Features";
import Statistics from "./components/Statistics/Statistics";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CTA from "./components/CTA/CTA";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {/* Navbar - ONLY on Home page */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">

        {/* Background Image Slider */}
        <HeroSlider />

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">

          <div className="hero-left">

            <span className="badge">
              AI Powered Healthcare
            </span>

            <h1>
              Predict Diseases
              <br />
              Before They
              <br />
              Become Serious
            </h1>

            <p>
              Our AI-powered disease prediction system helps you identify
              possible health conditions based on your symptoms with speed,
              accuracy, and reliability.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/predict")}
              >
                Get Started
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Other Home Sections */}
      <Features />
      <Statistics />
      <HowItWorks />
      <CTA />

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="logout-btn"
      >
        Logout
      </button>
    </>
  );
}

export default Home;