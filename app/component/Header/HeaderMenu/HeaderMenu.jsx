import React from "react";

import Menu from "../Menu";
import BtnMi from "../../ui/Button/BtnMi";
import Link from "next/link";

import Image from "next/image";
import img from "../../../../public/icons.png";

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
      <Menu />
      <BtnMi
        activeModal={activeModalBuy}
        setActiveModalBuy={setActiveModalBuy}
      />
    </div>
  );
};

export default HeaderMenu;
