 import "./Statistics.css";

function Statistics() {
  return (
    <section className="statistics">

      <div className="statistics-title">
        <h2>Trusted by Thousands</h2>
        <p>
          Our AI-powered healthcare platform is helping users make informed
          health decisions every day.
        </p>
      </div>

      <div className="statistics-container">

        <div className="stat-card">
          <h1>10K+</h1>
          <p>Predictions</p>
        </div>

        <div className="stat-card">
          <h1>98%</h1>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h1>5K+</h1>
          <p>Happy Users</p>
        </div>

        <div className="stat-card">
          <h1>24/7</h1>
          <p>Support</p>
        </div>

      </div>

    </section>
  );
}

export default Statistics;