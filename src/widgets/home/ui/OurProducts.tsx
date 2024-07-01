import { PRODUCTS, ProductCard } from "@/entities/product"

export const OurProducts = () => {
  return <div className="w-full bg-white95 h-[900px]">
    <div className="w-full max-w-[1300px] mx-auto h-full flex flex-col items-center pt-[30px]">
      <h1 className="text-[60px] font-bold text-black mb-10">Наша <span className="text-primary">продукция</span></h1>
      <div className="flex flex-row gap-x-5">
        {PRODUCTS.slice(0, 3).map(product => {
          return <ProductCard key={`product-card-${product.id}`} {...product} />
        })}
      </div>
    </div>
  </div>
}