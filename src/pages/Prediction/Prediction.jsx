  import { useState } from "react";
import axios from "axios";
import "./Prediction.css";

function Prediction() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e) => {
    e.preventDefault();

    if (!symptoms.trim()) {
      alert("Please enter symptoms.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const predictionData = {
        symptoms: symptoms,
      };

      const response = await axios.post(
        "http://localhost:8081/prediction/predict",
        predictionData
      );

      console.log("PREDICTION RESPONSE:", response.data);

      setResult(response.data);
    } catch (error) {
      console.log("PREDICTION ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to get disease prediction."
      );
    } finally {
      setLoading(false);
    }
  };

  const symptomList = result?.symptoms
    ? result.symptoms.split(",").map((s) => s.trim())
    : [];

  const precautionsList = result?.precautions
    ? result.precautions.split("|").map((p) => p.trim())
    : [];

  return (
    <div className="prediction-page">

      {/* Floating background effects */}
      <div className="prediction-orb orb-one"></div>
      <div className="prediction-orb orb-two"></div>
      <div className="prediction-orb orb-three"></div>

      <div className="prediction-container">

        {/* Header */}
        <div className="prediction-header">

          <div className="ai-badge">
            <span>✦</span>
            AI POWERED HEALTHCARE
          </div>

          <h1>
            AI Disease <span>Prediction</span>
          </h1>

          <p>
            Enter your symptoms and let our AI-powered system
            analyze them to provide a possible disease prediction.
          </p>

        </div>

        {/* Main Card */}
        <div className="prediction-card">

          <div className="card-glow"></div>

          <h2>Check Your Symptoms</h2>

          <p className="prediction-description">
            Enter symptoms separated by commas
          </p>

          <form onSubmit={handlePredict}>

            <div className="textarea-wrapper">

              <textarea
                rows="6"
                placeholder="Example: fever, headache, cough"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="predict-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="spinner"></span>
                  Predicting...
                </>
              ) : (
                <>
                  Predict Disease
                  <span className="arrow">→</span>
                </>
              )}

            </button>

          </form>

          {/* Result */}
          {result && (
            <div className="prediction-result">

              <div className="result-title">

                <div className="result-icon">
                  ✓
                </div>

                <div>
                  <h2>Prediction Complete</h2>
                  <p>AI analysis result</p>
                </div>

              </div>

              {/* Disease */}
              <div className="result-disease">

                <span className="result-label">
                  POSSIBLE DISEASE
                </span>

                <h3>
                  {result.disease}
                </h3>

              </div>

              {/* Confidence */}
              <div className="confidence-section">

                <div className="confidence-header">

                  <span>
                    AI Confidence
                  </span>

                  <strong>
                    {result.confidence}
                  </strong>

                </div>

                <div className="confidence-bar">

                  <div
                    className="confidence-fill"
                    style={{
                      width: `${parseFloat(result.confidence)}%`,
                    }}
                  ></div>

                </div>

              </div>

              {/* Symptoms */}
              <div className="symptoms-result">

                <h3>
                  Symptoms Analyzed
                </h3>

                <div className="symptom-tags">

                  {symptomList.map((symptom, index) => (
                    <span key={index}>
                      {symptom}
                    </span>
                  ))}

                </div>

              </div>

              {/* Precautions */}
              {precautionsList.length > 0 && (
                <div className="precautions-section">

                  <div className="precautions-heading">

                    <span>🛡️</span>

                    <div>
                      <h3>
                        Recommended Precautions
                      </h3>

                      <p>
                        General guidance based on the prediction
                      </p>
                    </div>

                  </div>

                  <div className="precautions-list">

                    {precautionsList.map(
                      (precaution, index) => (
                        <div
                          className="precaution-item"
                          key={index}
                        >

                          <span className="check">
                            ✓
                          </span>

                          <span>
                            {precaution}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* Disclaimer */}
              <div className="medical-note">
                ⚠️ This prediction is for educational and
                informational purposes only. It is not a medical
                diagnosis. Please consult a qualified healthcare
                professional for proper medical advice.
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Prediction;