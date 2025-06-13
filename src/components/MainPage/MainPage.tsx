import { Promo } from "./Promo/Promo.tsx";
import { FILTER_NEW, FILTER_TOP } from "./config.ts";
import { ContentBlock } from "./ContentBlock/ContentBlock.tsx";
import { useGetProductsQuery } from "../../store/api/store.api.ts";

export const MainPage = () => {
  const { data: topSellProd } = useGetProductsQuery(FILTER_TOP);
  const { data: newProd } = useGetProductsQuery(FILTER_NEW);

  const topSellersProducts = topSellProd || [];
  const newProducts = newProd || [];

  return (
    <div className="main-container">
      <Promo />
      <ContentBlock type="brands" title="Топовые бренды" />
      <div className="products-block-wrap">
        <ContentBlock type="products" title="Лидеры продаж" products={topSellersProducts} />
        <ContentBlock type="products" title="Новинки" products={newProducts} />
      </div>
      <ContentBlock type="reviews" title="Отзывы" />
    </div>
  )
};
