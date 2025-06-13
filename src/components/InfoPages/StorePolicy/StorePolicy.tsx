import {InfoPage} from "../InfoPage.tsx";
import {STORE_POLICY_CONFIG} from "./config.ts";

export const StorePolicy = () => {
    return (
      <InfoPage title="Политика магазина" className="store-policy-page">
          <div className="store-policy-info-block">
              {STORE_POLICY_CONFIG.map((item) => (
                <div key={item.title} className="store-policy-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
              ))}
              <div className="store-policy-info">
                  <h3>Способы оплаты</h3>
                  <p>- Кредитные и дебетовые карты</p>
                  <p>- Онлайн-кошельки</p>
                  <p>- Наличными при доставке</p>
              </div>
          </div>
      </InfoPage>
    )
};
