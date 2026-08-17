 import "./About.css";

import {
  FaBullseye,
  FaGlobe,
  FaRobot,
  FaCheck,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      {/* Floating 3D Orbs */}
      <div className="about-orb about-orb-one"></div>
      <div className="about-orb about-orb-two"></div>
      <div className="about-orb about-orb-three"></div>

      <div className="about-container">

        {/* Hero */}
        <section className="about-header">

          <span className="about-badge">
            <FaRobot />
            AI POWERED HEALTHCARE
          </span>

          <h1>
            About <span>Our Project</span>
          </h1>

          <p>
            AI Medical Disease Prediction System helps users predict
            possible diseases based on symptoms using Artificial
            Intelligence and Machine Learning.
          </p>

        </section>


        {/* Mission & Vision */}
        <section className="mission-vision">

          <div className="about-card">

            <div className="card-icon">
              <FaBullseye />
            </div>

            <h2>
              Our <span>Mission</span>
            </h2>

            <p>
              To provide a simple, secure, and intelligent healthcare
              prediction platform that helps users understand possible
              health conditions.
            </p>

          </div>


          <div className="about-card">

            <div className="card-icon">
              <FaGlobe />
            </div>

            <h2>
              Our <span>Vision</span>
            </h2>

            <p>
              To make AI-powered healthcare accessible to everyone and
              encourage early disease detection through technology.
            </p>

          </div>

        </section>


        {/* Technologies */}
        <section className="about-card technologies">

          <h2>
            Technologies <span>Used</span>
          </h2>

          <p className="section-description">
            Our system combines modern web technologies with Artificial
            Intelligence and Machine Learning.
          </p>

          <div className="tech-list">

            <span className="tech-item">
              <FaRobot />
              React
            </span>

            <span className="tech-item">
              <FaRobot />
              Spring Boot
            </span>

            <span className="tech-item">
              <FaRobot />
              MySQL
            </span>

            <span className="tech-item">
              <FaRobot />
              Machine Learning
            </span>

          </div>

        </section>


        {/* Why Choose Us */}
        <section className="about-card why-us">

          <h2>
            Why Choose <span>Our System?</span>
          </h2>

          <div className="why-list">

            <div className="why-item">
              <span className="why-icon">
                <FaCheck />
              </span>

              <p>
                AI-based disease prediction
              </p>
            </div>


            <div className="why-item">
              <span className="why-icon">
                <FaCheck />
              </span>

              <p>
                Fast and reliable results
              </p>
            </div>


            <div className="why-item">
              <span className="why-icon">
                <FaCheck />
              </span>

              <p>
                User-friendly interface
              </p>
            </div>


            <div className="why-item">
              <span className="why-icon">
                <FaCheck />
              </span>

              <p>
                Secure and modern healthcare solution
              </p>
            </div>

          </div>

        </section>


        {/* Medical Disclaimer */}
        <div className="about-disclaimer">
          <strong>Medical Disclaimer:</strong>{" "}
          This application is intended for educational purposes and
          should not replace professional medical advice, diagnosis,
          or treatment.
        </div>

      </div>

    </div>
  );
}

export default About;