import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">goMART 2.0</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
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
