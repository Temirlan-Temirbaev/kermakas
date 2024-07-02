import { IProduct } from "@/entities/product"

export const getPrice = (product: IProduct, square: number) => {
  return product.price * square;
}