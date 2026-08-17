 import "./ResultCard.css";

function ResultCard({ predictionResult }) {
  if (!predictionResult.disease) {
    return null;
  }

  return (
    <div className="result-card">

      <h2>🩺 Prediction Result</h2>

      <div className="result-item">
        <strong>🦠 Predicted Disease</strong>
        <p>{predictionResult.disease}</p>
      </div>

      <div className="result-item">
        <strong>📊 Confidence Score</strong>
        <p>{predictionResult.confidence}</p>
      </div>

      <div className="result-item">
        <strong>💊 Recommended Precautions</strong>

        <ul>
          {predictionResult.precautions.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ResultCard;