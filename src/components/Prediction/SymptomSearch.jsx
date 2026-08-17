import { useState } from "react";
import "./SymptomSearch.css";
import symptoms from "../../data/symptoms";

function SymptomSearch({ addSymptom }) {
  const [search, setSearch] = useState("");

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="symptom-search">

      <div className="search-box">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Type a symptom..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {search && (
        <div className="symptom-suggestions">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => {
                  addSymptom(symptom);
                  setSearch("");
                }}
              >
                {symptom}
              </button>
            ))
          ) : (
            <p className="no-results">No symptoms found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SymptomSearch;