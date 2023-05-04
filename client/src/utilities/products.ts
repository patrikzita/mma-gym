import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export async function getProductsDataFetch() {
  return axios.get(`${API_URL}/products`).then((res) => res.data);
}

export async function getProductDataFetch(id: string) {
  return axios
    .get(`${API_URL}/products/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
