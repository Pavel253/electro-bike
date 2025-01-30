import React from "react";

const BtnMi = ({ activeModal, setActiveModal, handleClick }) => {
  return (
    <div className="header__btn">
      <button className="btn btn__buy" onClick={() => setActiveModal(true)}>
        Купить
      </button>
      <button
        className="btn btn__Registration"
        onClick={() => setActiveModal(true)}
      >
        Войти
      </button>
    </div>
  );
};

export default BtnMi;
