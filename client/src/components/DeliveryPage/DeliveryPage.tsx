import './DeliveryPage.scss';

export const DeliveryPage = () => {

    return (
        <div className="delivery-page">
            <div className="delivery-page-title">
                <h1 className="delivery-page-title-text">Доставка и возврат</h1>
            </div>
            <div className="delivery-info-block">
                <div className="delivery-info">
                    <h3 className="delivery-info-subtitle">Доставка заказов</h3>
                    <p>Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете, как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает доверие клиентов и помогает принять решение купить у вас товар.</p>
                </div>
                <div className="delivery-info">
                    <h3 className="delivery-info-subtitle">Политика возврата и обмена</h3>
                    <p>Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.</p>
                </div>
            </div>
        </div>
    )
};