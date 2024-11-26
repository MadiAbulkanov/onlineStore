import { useLocation } from 'react-router-dom';
import './ProductInfoPage.scss';
import { Alert, Input } from '@mui/material';
import { useAppDispatch } from '../../../../store/hook';
import { addToBasket } from '../../../../store/slice/basket.slice';
import { useState } from 'react';

export const ProductInfoPage = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { product } = location.state || {};
    const [addProduct, setAddProduct] = useState<boolean>(false);

    const addProductButtonHandler = () => {
        dispatch(addToBasket(product));
        setAddProduct(true);

        setTimeout(() => {
            setAddProduct(false);
        }, 1000)
    }

    return (
        <>
        {addProduct && (
            <Alert className="alert" severity="success">Продукт добавлен в корзину!</Alert>
        )}
        <div className='product-info-page'>
            <div className="product-info-section">
                <div className="product-image-block">
                    <img className="product-image" src={product.image} />
                </div>
                <div className='product-info-block'>
                    <h1 className="product-info-name">{product.name}</h1>
                    <p className="product-info-article">Артикул: 0019</p>
                    <p className="product-info-price">{product.price} тенге</p>
                    <p className="product-info-desc">Это описание товара. Здесь вы можете рассказать о товаре подробнее: напишите о размерах, материалах, уходе и любых других важных моментах.</p>
                    <p className="product-quant">Количество</p>
                    <Input className="product-quant-input" type='number' />
                    <button className="product-add-button" onClick={addProductButtonHandler}>Добавить в корзину</button>
                </div>
            </div>
            <div className='general-info-section'>
                <div className='general-info-block'>
                    <h3 className='general-info-block-title'>О товаре</h3>
                    <p className='general-info-block-desc'>Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции.</p>
                </div>
                <div className='general-info-block'>
                    <h3 className='general-info-block-title'>Возврат товара и денег</h3>
                    <p className='general-info-block-desc'>Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.</p>
                </div>
                <div className='general-info-block'>
                    <h3 className='general-info-block-title'>Доставка</h3>
                    <p className='general-info-block-desc'>Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете, как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает доверие клиентов и помогает принять решение купить у вас товар.</p>
                </div>
            </div>
        </div>
        </>
    )
};