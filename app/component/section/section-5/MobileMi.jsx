import Image from "next/image";
import React from "react";

import imgPhone from "../../../../public/section5/1.png";
// import imgFon from "../../../../public/section5/2.png";

import imgBtnApple from "../../../../public/section5/apple.png";
import imgBtnGoogle from "../../../../public/section5/google.png";
import img from "../../../../public/section5/icons.png";

import "./MobileMi.scss";

const MobileMi = () => {

  return (
    <section className="section__5">
      <div className="container">
        <div className="container__home">
          <div className="container__left">
            <h2 className="h2">Мобильное приложение Mi Home</h2>
            <p className="p">
              Подключите самокат к мобильному приложению Mi Home и используйте
              его для блокировки и разблокировки самоката, а так же просмотра
              основных данных: пробег, скорость, уровень заряда аккумулятора.
            </p>
            <div className="btns">
              <button className="btn__apple">
                <Image alt='img' src={imgBtnApple} />
              </button>
              <button className="btn__google">
                <Image alt='img' src={imgBtnGoogle} />
              </button>
            </div>
          </div>
          <Image alt='img' src={imgPhone} />
        </div>
        <svg
          className="svg-14"
          width="840"
          height="584"
          viewBox="0 0 840 584"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_0_195)">
            <ellipse
              cx="269"
              cy="569.5"
              rx="289.5"
              ry="291"
              transform="rotate(-90 269 569.5)"
              fill="url(#paint0_linear_0_195)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_195"
              x="-302"
              y="0"
              width="1142"
              height="1139"
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
                result="effect1_foregroundBlur_0_195"
              />
            </filter>
            <linearGradient
              id="paint0_linear_0_195"
              x1="5.18258"
              y1="436.816"
              x2="410.761"
              y2="688.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FC1F1F" />
              <stop offset="1" stopColor="#FCCB1F" stopOpacity="0.31" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container__mi">
          <div className="card__section-5">
            <Image alt='img' src={img} className="section__icon" width={60} height={40} />
            <h2 className="h2">О бренде Xiaomi</h2>
            <p className="p">
              Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010
              году под девизом - «Инновации для всех».
              <br /> <br /> Мы верим, что высококачественные продукты и
              передовые технологии должны быть доступны каждому.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMi;
