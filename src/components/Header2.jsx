import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <header>
        <span className="logo"><Link to="/">goMART 2.0</Link></span>
        <ul className="nav">
          <li><Link to="/AboutUsPage">О нас</Link></li>                   
          <li><Link to="/ContactPage">Контакты</Link></li>
          <li><Link to="/WorkPage">Работа</Link></li>
        </ul>
    </header>
  );
};

export default Header2;
