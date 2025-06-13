import {InfoPage} from "../InfoPage.tsx";
import {DELIVERY_CONFIG} from "./config.ts";

export const Delivery = () => {
    return (
      <InfoPage title="Доставка и возврат" className="delivery-page">
        <div className="delivery-info-block">
          {DELIVERY_CONFIG.map((item) => (
            <div key={item.title} className="delivery-info">
              <h3 className="delivery-info-subtitle">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </InfoPage>
    )
};
