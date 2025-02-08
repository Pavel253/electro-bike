import React from "react";

const BtnMi = ({ setActiveModalBuy, setActiveModalReg }) => {
  return (
    <div className="header__btn">
      <button 
          className="btn btn__buy" 
          onClick={() => setActiveModalBuy(true)}>
        Купить
      </button>
      <button
        className="btn btn__Registration"
        onClick={() => setActiveModalReg(true)}
      >
        Войти
      </button>
    </div>
  );
};

export default BtnMi;
