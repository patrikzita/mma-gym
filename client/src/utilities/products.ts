import axios from "axios";

export async function getProductsDataFetch() {
  return axios.get("http://localhost:3000/products").then((res) => res.data);
}

export async function getProductDataFetch(id: string) {
  return axios
    .get(`http://localhost:3000/products/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
