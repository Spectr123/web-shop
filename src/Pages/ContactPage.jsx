import React from "react";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";

const ContactPage = () => {
  return (
    <div className="wrapper">
      <Header2 />
      <div className="contact-content">
        <div className="contact-hero">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">🏢</div>
            <h3>Компания</h3>
            <p>ТОО "Жеті Аспан Сервис"</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📋</div>
            <h3>ИНН / БИН</h3>
            <p>121040010003</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Юридический адрес</h3>
            <p>Республика Казахстан, г. Астана, ул. Сарайшык 32/2</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Служба поддержки</h3>
            <p>+7 701 444 7557</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>
              <a href="mailto:info@galmart.kz">info@galmart.kz</a>
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🌐</div>
            <h3>Социальные сети</h3>
            <div className="social-links">
              <Link to="#" className="social-link">
                Facebook
              </Link>
              <Link to="#" className="social-link">
                Instagram
              </Link>
              <Link to="#" className="social-link">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
