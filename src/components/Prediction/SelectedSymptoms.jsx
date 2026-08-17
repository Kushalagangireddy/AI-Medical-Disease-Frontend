import "./SelectedSymptoms.css";

function SelectedSymptoms({ selectedSymptoms, removeSymptom }) {
  return (
    <div className="selected-symptoms">
      {selectedSymptoms.length === 0 ? (
        <p className="empty-text">No symptoms selected.</p>
      ) : (
        <div className="symptom-tags">
          {selectedSymptoms.map((symptom) => (
            <span className="tag" key={symptom}>
              {symptom}

              <button
                type="button"
                onClick={() => removeSymptom(symptom)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectedSymptoms;