import React from "react";
import Link from "next/link";
const BtnMi = ({ setActiveModalBuy }) => {
  return (
    <div className="header__btn">
      <button className="btn btn__buy" onClick={() => setActiveModalBuy(true)}>
        Купить
      </button>
        <Link className="btn btn__Registration" href="register">Войти</Link>
    </div>
  );
};

export default BtnMi;
