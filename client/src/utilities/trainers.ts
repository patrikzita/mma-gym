import axios from "axios";

export async function getTrainersDataFetch(count?: number) {
  return axios.get("http://localhost:3000/trainers").then((res) => {
    const trainers = res.data;
    return count ? trainers.slice(0, count) : trainers;
  });
}

export async function getTrainerDataFetch(id: string) {
  return axios
    .get(`http://localhost:3000/trainers/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
