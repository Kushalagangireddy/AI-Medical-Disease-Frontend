 import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-title">
        <h2>How It Works</h2>
        <p>
          Get AI-powered disease prediction in just three simple steps.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-card">
          <div className="number">01</div>
          <h3>Register</h3>
          <p>
            Create your account securely to access all healthcare features.
          </p>
        </div>

        <div className="timeline-card">
          <div className="number">02</div>
          <h3>Enter Symptoms</h3>
          <p>
            Select or type your symptoms for AI-based disease analysis.
          </p>
        </div>

        <div className="timeline-card">
          <div className="number">03</div>
          <h3>View Prediction</h3>
          <p>
            Instantly receive disease prediction, confidence score and health recommendations.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;