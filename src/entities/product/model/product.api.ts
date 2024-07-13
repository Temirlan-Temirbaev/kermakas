import { IProduct } from "./product.interface";
import { client } from "@/shared/utils/api";

export const getProducts = (limit? : number) : Promise<IProduct[]> => {
  const params = new URLSearchParams()
  if (limit) {
    params.append("pagination[start]", "0")
    params.append("pagination[limit]", String(limit))
  }
  params.append("populate", "*")
  return client.get(`products?${params}`).then((r : {data : {data : IProduct[]}}) => {
    return r.data.data;
  })
}