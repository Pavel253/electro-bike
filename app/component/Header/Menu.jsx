import React from "react";

const Menu = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="header__ul">
      <li className="header__li">
        <a onClick={() =>scrollToSection('section1')}  className="header__li-a">О продукте</a>
      </li>
      <li className="header__li">
        <a onClick={() =>scrollToSection('section3')} className="header__li-a">Внешний вид</a>
      </li>
      <li className="header__li">
        <a onClick={() =>scrollToSection('section4')} className="header__li-a">Безопасность</a>
      </li>
      <li className="header__li">
        <a onClick={() =>scrollToSection('section6')} className="header__li-a">Отзывы</a>
      </li>
      <li className="header__li">
        <a onClick={() =>scrollToSection('section7')} className="header__li-a">FAQ</a>
      </li>
    </ul>
  );
};

export default Menu;
