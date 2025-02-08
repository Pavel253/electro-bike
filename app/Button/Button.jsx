"use client"; 
import React from "react";

import './Button.scss'
const Button = ({ activeFon, setActiveFon, handleClick }) => {

  return (
    <div
      className={activeFon ? "btn__header active" : "btn__header"}
      onClick={handleClick}
    >
      <div className="btn__header-mi">
        <p>Белый</p>
      </div>
      <div className="btn__header-mi">
        <p>Черный</p>
      </div>
      <div className="blur"></div>
    </div>
  );
};

export default Button;
