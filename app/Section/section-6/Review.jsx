import React from "react";

import "./Review.scss";

const Review = () => {
  return (
    <section id="section6" className="section__6">
      <svg
        className="svg-13"
        width="1020"
        height="1017"
        viewBox="0 0 1020 1017"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_0_267)">
          <ellipse
            cx="471.5"
            cy="474"
            rx="471.5"
            ry="474"
            transform="matrix(2.87868e-08 1 1 -2.87868e-08 280 -206)"
            fill="url(#paint0_linear_0_267)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_267"
            x="0"
            y="-486"
            width="1508"
            height="1503"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="140"
              result="effect1_foregroundBlur_0_267"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_267"
            x1="41.8284"
            y1="257.875"
            x2="564.568"
            y2="558.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FC501F" />
            <stop offset="1" stop-color="#FC501F" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <h2 className="h2">Отзывы о Mi Scooter Pro 2</h2>
      </div>
      <div className="container_slider-reviews">
        <div className="review__card">
          <h4 className="h4">Михаил Сафонов</h4>
          <div className="line" />
          <p className="p">
            Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
            30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
            одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски
            (вес аппарата, развесовка).
            <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
            получил комфорт при небольшом весе самоката.
          </p>
        </div>
        <div className="review__card">
          <h4 className="h4">Михаил Сафонов</h4>
          <div className="line" />
          <p className="p">
            Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
            30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
            одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски
            (вес аппарата, развесовка).
            <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
            получил комфорт при небольшом весе самоката.
          </p>
        </div>
        <div className="review__card">
          <h4 className="h4">Михаил Сафонов</h4>
          <div className="line" />
          <p className="p">
            Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
            30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
            одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски
            (вес аппарата, развесовка).
            <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
            получил комфорт при небольшом весе самоката.
          </p>
        </div>
      </div>
      <div className="container__btns">
        <button className="btn__review">Оставить отзыв</button>
        <div>
          <button className=" btn__left">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="27" r="27" fill="#F1F1F1" />
            </svg>
          </button>
          <button className=" btn__right">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="27" r="27" fill="#FF4C0D" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
