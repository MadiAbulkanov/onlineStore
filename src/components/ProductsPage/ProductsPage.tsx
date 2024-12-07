import { useEffect, useState } from 'react';
import { ProductCardProps } from '../../interfaces/IProducts.interface';
import { ProductCard } from '../MainPage/ProductsBlock/ProductCard/ProductCard';
import './ProductsPage.scss';
import { useInView } from 'react-intersection-observer';
import { Filters } from './Filters/Filters';
import { FilterItems } from '../../interfaces/IFilterItems.interface';
import { filterByBrand } from '../../data/data';

export const ProductsPage = ({ products, blockTitle, filterByType }: { products: ProductCardProps[], blockTitle: string, filterByType: FilterItems }) => {

    const [visibleProducts, setVisibleProducts] = useState<ProductCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(() => {
        setVisibleProducts(products.slice(0, productsPerPage));
        setCurrentPage(1);
    }, [products]);

    const loadMoreProducts = () => {
        const nextPage = currentPage + 1;
        const startIndex = (nextPage - 1) * productsPerPage;
        const endIndex = nextPage * productsPerPage;

        if (startIndex >= products.length) return;
        const newProducts = products.slice(startIndex, endIndex);

        setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setCurrentPage(nextPage);
    };

    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            loadMoreProducts();
        }
    }, [inView]);


    return (
        <div className="products-page">
            <div className="products-page-title">
                <h1 className="products-page-title-text">{blockTitle}</h1>
            </div>
            <div className="products-section">
                <Filters filterByType={filterByType} filterByBrand={filterByBrand} />
                <div className="products all-products">
                    {visibleProducts.map((product) => (
                        <div key={product.id} className='fade-in'>
                            <ProductCard product={product} />
                            {product.id === visibleProducts.length - 1 && <div ref={ref} style={{ height: "1px" }} ></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};