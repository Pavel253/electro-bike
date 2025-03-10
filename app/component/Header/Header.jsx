import React, { useState, useEffect } from "react";

import Button from "../../component/ui/Button/Button";
import bake from "../../../public/Байк.png";
import ModalBuy from "../Modal/ModalBuy/ModalBuy";
import Image from "next/image";

import "./Header.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu.jsx";

const Header = ({ setActiveModalBuy, activeModalBuy, activeFon, setActiveFon, handleClickFon }) => {

  useEffect(() => {
    if (activeModalBuy) {
      // Блокируем скроллинг
      document.body.style.overflow = "hidden";
    } else {
      // Разблокируем скроллинг
      document.body.style.overflow = "auto";
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModalBuy]);

  return (
    <header className="header">
      <svg
        className="svg-1"
        style={{ zIndex: -1 }}
        width="752"
        height="581"
        viewBox="0 0 752 581"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_0_126)">
          <ellipse
            cx="711.91"
            cy="-129.268"
            rx="429.732"
            ry="431.91"
            transform="rotate(-90 711.91 -129.268)"
            fill="#FC501F"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_126"
            x="0"
            y="-839"
            width="1423.82"
            height="1419.46"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="140"
              result="effect1_foregroundBlur_0_126"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="svg-2"
        style={{ zIndex: -1 }}
        width="1010"
        height="400"
        viewBox="0 0 1010 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_0_127)">
          <ellipse
            cx="505"
            cy="-103.5"
            rx="223.5"
            ry="225"
            transform="rotate(-90 505 -103.5)"
            fill="#FC1F1F"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_127"
            x="0"
            y="-607"
            width="1010"
            height="1007"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="140"
              result="effect1_foregroundBlur_0_127"
            />
          </filter>
        </defs>
      </svg>
      <HeaderMenu activeModalBuy={activeModalBuy} setActiveModalBuy={setActiveModalBuy} />
      <div className="header_container">
        <div className="header__container-left">
          <h1 className="h1">Стильный электросамокат с мощным аккумулятором</h1>
          <p className="header__p">
            Улучшенная производительность для дальних путешествий. Работает так
            же просто, как и выглядит.
          </p>
          <Button
            handleClick={handleClickFon}
            activeFon={activeFon}
            setActiveFon={setActiveFon}
          />
        </div>
        <div className="header__container-right">
          <Image className="bake" alt="bake" src={bake} />
        </div>
      </div>
      <ModalBuy
        activeFon={activeFon}
        setActiveFon={setActiveFon}
        handleClickFon={handleClickFon}
        activeModal={activeModalBuy}
        setActiveModal={setActiveModalBuy}
      />
    </header>
  );
};

export default Header;
