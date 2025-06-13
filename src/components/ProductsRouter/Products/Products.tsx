import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Filters } from "../Filters/Filters.tsx";
import { ProductCard } from "../../MainPage/ContentBlock/ProductCard/ProductCard.tsx";
import boxIcon from '../../../assets/icon-box.png';
import { FILTER_BY_BRAND } from "./config.ts";
import { useGetProductsQuery } from '../../../store/api/store.api.ts';
import { IProduct } from '../../../types/IProducts.interface.ts';

interface ProductsProps {
  config: { title: string; filtersType: string }
}

export const Products: FC<ProductsProps> = ({ config }) => {
  const [filters, setFilters] = useState({ type: config.filtersType, brand: '', prodClass: '' });
  const { data } = useGetProductsQuery(filters);
  const products = data || [];

  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    setVisibleProducts(products.slice(0, productsPerPage));
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    setFilters({ type: config.filtersType, brand: '', prodClass: '' })
  }, [config.filtersType]);

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

  const typeSelectionHandler = (val: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, prodClass: val }));
  };

  const brandSelectionHandler = (val: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, brand: val }));
  };


  return (
    <div className="products-page">
      <h1 className="products-page-title">{config.title}</h1>
      <div className="products-section">
        <Filters filterByBrand={FILTER_BY_BRAND} typeSelectionHandler={typeSelectionHandler} brandSelectionHandler={brandSelectionHandler} />
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
