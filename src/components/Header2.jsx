import React from "react";
import { Link } from "react-router-dom";


// По факту костыль конечно, но оставлять один header и кидать кучу пропсов долго и неудобно, так что "И так сойдет"

const Header2 = () => {

  // Поеснение: Второй header нужен потому что в первом не только header, но и слайдер и корзина которые нах не нужны на других страницах кроме главной

  return (
    <header>
      <span className="logo">
        <Link to="/">На главную</Link>
      </span>
      <ul className="nav">
        <li>
          <Link to="/AboutUsPage">О нас</Link>
        </li>
        <li>
          <Link to="/ContactPage">Контакты</Link>
        </li>
        <li>
          <Link to="/WorkPage">Работа</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header2;
