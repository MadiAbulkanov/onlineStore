import { useState } from 'react';
import {InfoPage} from "../InfoPage.tsx";

interface Message {
    name: string;
    email: string;
    phone: string;
    text: string;
}

export const Contact = () => {
    const [message, setMessage] = useState<Message>({
        name: '',
        email: '',
        phone: '',
        text: ''
    });

    const inputChangeHandle = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setMessage((prevMessage) => {
            const updateMessage = { ...prevMessage, [name]: value };
            return updateMessage
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(message);
    }

    return (
      <InfoPage title="Свяжитесь с нами" className="contact-page">
          <div className="contact-page-form">
              <h3 className="contact-page-form-title">Обращайтесь по любому вопросу</h3>
              <form onSubmit={handleSubmit}>
                  <input className="input-name" type="text" value={message.name} onChange={inputChangeHandle} name="name" placeholder="Имя" />
                  <input className="input-email" type="text" value={message.email} onChange={inputChangeHandle} name="email" placeholder="Эл. почта" />
                  <input className="input-phone" type="text" value={message.phone} onChange={inputChangeHandle} name="phone" placeholder="Телефон" />
                  <textarea value={message.text} onChange={inputChangeHandle} rows={10} name="text" placeholder="Добавьте сообщение..." />
                  <button className="form-submit-button">Отправить</button>
              </form>

              <div className="contact-information-block">
                  <h1 className="contact-information-title">БУДЕМ РАДЫ ПОМОЧЬ</h1>
                  <div className="contact-information">
                      <p className="contact-information-text">АДРЕС: ул. Арбат, 1а</p>
                      <p className="contact-information-text">Алматы, 050000, Казахстан</p>
                      <p className="contact-information-text">тел. +7 123 456-78-90</p>
                      <p className="contact-information-text">Эл. почта: infi@info.com</p>
                  </div>
              </div>
          </div>
      </InfoPage>
    )
};
