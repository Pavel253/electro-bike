"use client"; 
import React, { useState } from "react";

const Button = () => {

  const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive); 
    };

  return (
    <div
      className={isActive ? "btn__header active" : "btn__header"}
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
