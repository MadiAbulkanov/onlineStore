import { useLocation } from 'react-router-dom';
import { Alert, Input } from '@mui/material';
import { useState } from 'react';
import noImage from '../../assets/No_Image.jpg';
import { GENERAL_INFO_CONFIG } from "./config.ts";
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { IProd } from '../../types/IProducts.interface.ts';
import { addToBasket } from '../../store/slice/basket.ts';

export const ProductInfoPage = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { product } = location.state || {};
    const [addProduct, setAddProduct] = useState<boolean>(false);
    const [prod, setProd] = useState<IProd>({
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type,
        brand: product.brand,
        topSeller: product.topSeller,
        newProd: product.newProd,
        quant: 1,
    })

    const addProductButtonHandler = () => {
        dispatch(addToBasket(prod));

        setAddProduct(true);

        setTimeout(() => {
            setAddProduct(false);
        }, 1000)
    }

    const img = `http://localhost:8000/uploads/${product.image}`;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (Number(value) > 0) {
            setProd({ ...prod, quant: Number(value) });
        }
    };

    return (
        <>
            {addProduct && (
                <Alert className="alert" severity="success">Продукт добавлен в корзину!</Alert>
            )}
            <div className='product-info-page'>
                <div className="product-info-section">
                    <div className="product-image-block">
                        {product.image ? (
                            <img className="product-image" src={img} />
                        ) : (
                            <img className="product-image" src={noImage} />
                        )}
                    </div>
                    <div className='product-info-block'>
                        <h1 className="product-info-name">{product.name}</h1>
                        <p className="product-info-article">Артикул: 0019</p>
                        <p className="product-info-price">{product.price} тенге</p>
                        <p className="product-info-desc">Это описание товара. Здесь вы можете рассказать о товаре подробнее: напишите о размерах, материалах, уходе и любых других важных моментах.</p>
                        <p className="product-quant">Количество</p>
                        <Input className="product-quant-input" onChange={onChangeHandler} value={prod.quant} type='number' />
                        <button className="button product-add-button" onClick={addProductButtonHandler}>Добавить в корзину</button>
                    </div>
                </div>
                <div className='general-info-section'>
                    {GENERAL_INFO_CONFIG.map((item) => (
                        <div key={item.title} className='general-info-block'>
                            <h3 className='general-info-block-title'>{item.title}</h3>
                            <p className='general-info-block-desc'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
