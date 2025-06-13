import {FC} from "react";
import {useParams} from "react-router-dom";
import {PRODUCTS_CONFIG} from "./config.ts";
import {Products} from "./Products/Products.tsx";

export const ProductsRouter: FC = () => {
  const { category } = useParams();
  const config = PRODUCTS_CONFIG.find((elem) => ((elem.filtersType === category) || (category === 'products' && elem.filtersType === '')));

  if (!config) return <div>Категория не найдена</div>;

  return <Products config={config} />
};
