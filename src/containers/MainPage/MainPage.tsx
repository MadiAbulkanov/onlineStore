import { BrandsBlock } from "../../components/MainPage/BrandsBlock/BrandsBlock";
import { ProductsBlock } from "../../components/MainPage/ProductsBlock/ProductsBlock";
import { PromoBlock } from "../../components/MainPage/PromoBlock/PromoBlock";
import './MainPage.scss';
import { ReviewsBlock } from "../../components/MainPage/ReviewsBlock/ReviewsBlock";
import { useGetProductsQuery } from "../../store/api/store.api";

export const MainPage = () => {
    const filterTop = { type: '', brand: '', prodClass: 'topSeller' };
    const filterNew = { type: '', brand: '', prodClass: 'newProd' };

    const { data: topSellProd } = useGetProductsQuery(filterTop);
    const { data: newProd } = useGetProductsQuery(filterNew);

    const topSellersProducts = topSellProd || [];
    const newProducts = newProd || [];
    
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