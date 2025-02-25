import React, { useState, useEffect } from "react";

import Menu from "../Menu";
import BtnMi from "../../ui/Button/BtnMi";
import Link from "next/link";
import Image from "next/image";
import img from "../../../../public/icons.png";

const HeaderMenu = ({ activeModalBuy, setActiveModalBuy }) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
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
        <div className="user-info">
          <span>{userName}</span>
          <button onClick={handleLogout}><Link>Выйти</Link></button>
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
