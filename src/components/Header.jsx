import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import { FaShoppingBasket } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return(
    <div className="empty">
      <h2>Корзина пуста</h2>
      <p>Добавьте товары в корзину, чтобы увидеть их здесь.</p>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  const getTotalPrice = () => {
    return props.orders.reduce((total, item) => total + item.price, 0);
  };

  return (
    <header>
      <div>
        <span className="logo">goMART 2.0</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Работа</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`basket-icon ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
            <>
              <div className="cart-total">
                  <div className="total-price">
                    <strong>Общая сумма: {getTotalPrice()} ₸</strong>
                  </div>
                  <button className="purchase-btn" onClick={() => alert("Спасибо за покупку!")}>
                    Купить
                  </button>
                </div>
            </>
          </div>
        )}
      </div>
      <div className="presentation">
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="presentation-slider"
        >
          <SwiperSlide>
            <img src="./img/bg.png" alt="Shop Item 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/bg2.jpg" alt="Shop Item 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/bg3.jpg" alt="Shop Item 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
}
