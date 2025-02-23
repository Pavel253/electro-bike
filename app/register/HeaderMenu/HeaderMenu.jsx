import React from "react";

import BtnMi from "../../component/ui/Button/BtnMi";
import Link from "next/link";

import Image from "next/image";
import img from "../../../public/icons.png";

const HeaderMenu = ({ activeModalBuy, setActiveModalBuy }) => {
  return (
    <div className="header_menu">
      <Link href="/">
        <Image
          id="#mi"
          src={img}
          className="header_menu-icon"
          width={60}
          height={40}
          alt="image"
        />
      </Link>
      <ul className="header__ul">
        <li className="header__li">
          <a
            onClick={() => scrollToSection("section1")}
            className="header__li-a"
          >
            О продукте
          </a>
        </li>
        <li className="header__li">
          <a
            onClick={() => scrollToSection("section3")}
            className="header__li-a"
          >
            Внешний вид
          </a>
        </li>
        <li className="header__li">
          <a
            onClick={() => scrollToSection("section4")}
            className="header__li-a"
          >
            Безопасность
          </a>
        </li>
        <li className="header__li">
          <a
            onClick={() => scrollToSection("section6")}
            className="header__li-a"
          >
            Отзывы
          </a>
        </li>
        <li className="header__li">
          <a
            onClick={() => scrollToSection("section7")}
            className="header__li-a"
          >
            FAQ
          </a>
        </li>
      </ul>
      <BtnMi
        activeModal={activeModalBuy}
        setActiveModalBuy={setActiveModalBuy}
      />
    </div>
  );
};

export default HeaderMenu;
