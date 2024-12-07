import { BrandsBlock } from "../../components/MainPage/BrandsBlock/BrandsBlock";
import { ProductsBlock } from "../../components/MainPage/ProductsBlock/ProductsBlock";
import { PromoBlock } from "../../components/MainPage/PromoBlock/PromoBlock";
import './MainPage.scss';
import { ReviewsBlock } from "../../components/MainPage/ReviewsBlock/ReviewsBlock";
import { newProducts, topSellersProducts } from "../../data/data";

export const MainPage = () => {
    return (
        <div className="main-container">
            <PromoBlock />
            <BrandsBlock />
            <div className="products-block-wrap">
                <ProductsBlock products={topSellersProducts} blockTitle="Лидеры продаж" />
                <ProductsBlock products={newProducts} blockTitle="Новинки" />
            </div>
            <ReviewsBlock />
        </div>
    )
};