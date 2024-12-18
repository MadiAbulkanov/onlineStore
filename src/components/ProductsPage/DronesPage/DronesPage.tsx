import { useEffect, useState } from 'react';
import { ProductCard } from '../../MainPage/ProductsBlock/ProductCard/ProductCard';
import '../ProductsPage.scss';
import { useInView } from 'react-intersection-observer';
import { Filters } from '../Filters/Filters';
import { filterByBrand } from '../../../data/data';
import { filterByType } from '../../../data/data';
import { IProduct } from '../../../interfaces/IProducts.interface';
import { useGetProductsQuery } from '../../../store/api/store.api';
import boxIcon from '../../../assets/icon-box.png';

export const DronesPage = () => {
    const filters = { type: 'drone', brand: '', prodClass: '' };
    const { data } = useGetProductsQuery(filters);
    const products = data || [];   

    const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(() => {
        setVisibleProducts(products.slice(0, productsPerPage));
        setCurrentPage(1);
    }, [data]);

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
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {           
            loadMoreProducts();
        }
    }, [inView]);


    return (
        <div className="products-page">
            <div className="products-page-title">
                <h1 className="products-page-title-text">Дроны</h1>
            </div>
            <div className="products-section">
                <Filters filterByType={filterByType} filterByBrand={filterByBrand} />
                <div className="products all-products">
                    {visibleProducts.map((product, index) => (
                        <div key={product.id} className='fade-in'>
                            <ProductCard product={product} />
                            {index === visibleProducts.length - 1 && <div ref={ref} style={{ height: "100px" }} ></div>}
                        </div>
                    ))}
                    {products.length < 1 && (
                        <img src={boxIcon} alt="box-icon" className='box-icon' />
                    )}
                </div>
            </div>
        </div>
    )
};