 import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="section-title">
        <h2>Why Choose AI Medical?</h2>
        <p>
          Our AI-powered healthcare platform provides fast, accurate,
          and secure disease prediction for better health decisions.
        </p>
      </div>

      <div className="features-container">

        <div className="feature-card">
          <h3>AI Disease Prediction</h3>
          <p>
            Advanced artificial intelligence analyzes your symptoms and
            predicts possible diseases with high accuracy.
          </p>
        </div>

        <div className="feature-card">
          <h3>Accurate Reports</h3>
          <p>
            Receive detailed prediction results with confidence scores
            and useful medical insights.
          </p>
        </div>

        <div className="feature-card">
          <h3>Secure & Private</h3>
          <p>
            Your personal and medical information remains protected with
            secure data handling.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast Prediction</h3>
          <p>
            Get AI-powered disease predictions within seconds after
            entering your symptoms.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;