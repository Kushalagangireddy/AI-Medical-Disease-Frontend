 import { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/prediction/history"
      );

      console.log("HISTORY RESPONSE:", response.data);

      setHistory(response.data);
    } catch (error) {
      console.log("HISTORY ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("BACKEND RESPONSE:", error.response?.data);

      alert("Failed to load prediction history.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="history-page">

      <div className="history-container">

        <h1>Prediction History</h1>

        <p className="history-subtitle">
          View your previous disease prediction results.
        </p>

        {loading ? (
          <p className="loading">
            Loading history...
          </p>
        ) : history.length === 0 ? (
          <p className="no-history">
            No prediction history found.
          </p>
        ) : (
          <div className="history-table-container">

            <table className="history-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Symptoms</th>
                  <th>Disease</th>
                  <th>Confidence</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item) => (
                  <tr key={item.id}>

                    <td>{item.id}</td>

                    <td>
                      {item.symptoms}
                    </td>

                    <td>
                      {item.disease}
                    </td>

                    <td>
                      {item.confidence}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}

export default History;