import React, { useState, useEffect } from "react";

import Menu from "../Menu";
import BtnMi from "../../ui/Button/BtnMi";
import Link from "next/link";
import Image from "next/image";
import img from "../../../../public/icons.png";

const HeaderMenu = ({ activeModalBuy, setActiveModalBuy }) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
  };

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
      <Menu />
      {userName ? (
        <div className="header__btn">
          <button
            className="btn btn__buy"
            onClick={() => setActiveModalBuy(true)}
          >
            Купить
          </button>
          <span>{userName}</span>
          <button className="btn__exit" onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <BtnMi
          activeModal={activeModalBuy}
          setActiveModalBuy={setActiveModalBuy}
        />
      )}
    </div>
  );
};

export default HeaderMenu;
