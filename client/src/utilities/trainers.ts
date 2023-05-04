import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;


export async function getTrainersDataFetch(count?: number) {
  return axios.get(`${API_URL}/trainers`).then((res) => {
    const trainers = res.data;
    return count ? trainers.slice(0, count) : trainers;
  });
}

export async function getTrainerDataFetch(id: string) {
  return axios
    .get(`${API_URL}/trainers/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
