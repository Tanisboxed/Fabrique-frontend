/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Rating from "./rating";

const recommendedProducts: any[] = [
  {
    _id: "1",
    title: "Womens milano handbag",
    price: 993,
    discountPrice: 242,
    images: ["https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=517&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    rating: 4.5,
    reviewCount: 40,
    discount: 20,
  },
  {
    _id: "2",
    title: "Mens shirt hoodie",
    price: 140,
    images: ["https://images.unsplash.com/photo-1675095525726-c4759069b211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    rating: 4.3,
    reviewCount: 35,
  },
  {
    _id: "3",
    title: "Sleek Womens Jeans",
    price: 579,
    images: ["https://plus.unsplash.com/premium_photo-1689371952452-c88c72464115?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    rating: 4.6,
    reviewCount: 45,
  },
  {
    _id: "4",
    title: "Womens Sweater pladed cute",
    price: 545,
    discountPrice: 390,
    images: ["https://plus.unsplash.com/premium_photo-1707816501075-32dc716ec133?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    rating: 4.8,
    reviews: [],
    discount: 35,
  },
];

function ProductRecommend() {
  return (
    <section className="my-16 px-5">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {recommendedProducts.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {product.discountPrice && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                  -{100}%
                </span>
              )}
            </div>
            <h3 className="font-medium mb-2 text-sm md:text-base">
              {product.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Rating rating={product.rating} />
              <span className="text-sm text-gray-500">
                ({product.reviewCount})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">${product.price}</span>
              {product.discountPrice && (
                <span className="text-gray-400 line-through">
                  ${product.discountPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductRecommend;
