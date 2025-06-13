import { FC } from "react";
import { BRANDS_LOGO, REVIEWS } from "./config.ts";
import { ProductCard } from "./ProductCard/ProductCard.tsx";
import { Review } from "./Review/Review.tsx";
import { IProduct } from "../../../types/IProducts.interface.ts";

interface ContentBlockProps {
  type: "brands" | "products" | "reviews";
  products?: IProduct[];
  title: string;
}
export const ContentBlock: FC<ContentBlockProps> = ({ type, title, products }) => {
  return (
    <div className={`content-block ${type}-block`}>
      <h1 className="content-block-title">{title}</h1>
      <div className={`contents ${type}`}>
        {type === 'brands' && (
          BRANDS_LOGO.map((logo, index) => (
            <img key={index} className="brand-logo" src={logo} alt="brand-logo" />
          ))
        )}
        {type === 'products' && (
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
        {type === 'reviews' && (
          REVIEWS.map((review) => (
            <Review key={review.id} review={review} />
          ))
        )}
      </div>
    </div>
  )
};
