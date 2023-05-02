import { useQuery } from "@tanstack/react-query";
import { getProductDataFetch, getProductsDataFetch } from "./products";
import { getTrainerDataFetch, getTrainersDataFetch } from "./trainers";

export function useProductQuery(id: string) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductDataFetch(id),
  });
}

export function useProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataFetch,
  });
}

export function useTrainersQuery(count?: number) {
  return useQuery({
    queryKey: ["trainers"],
    queryFn: () => getTrainersDataFetch(count),
  });
}
export function useTrainerQuery(id: string) {
  return useQuery({
    queryKey: ["trainer", id],
    queryFn: () => getTrainerDataFetch(id),
  });
}
