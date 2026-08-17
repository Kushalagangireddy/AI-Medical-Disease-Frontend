import api from "../api/axiosConfig";

export const predictDisease = (symptoms) => {
  return api.post("/predict", {
    symptoms,
  });
};