 import "./CTA.css";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta">

      <div className="cta-content">

        <h2>Take Control of Your Health Today</h2>

        <p>
          Experience AI-powered disease prediction with fast, reliable, and
          secure healthcare insights. Start your health journey now.
        </p>

        <button onClick={() => navigate("/predict")}>
          Start Prediction
        </button>

      </div>

    </section>
  );
}

export default CTA;