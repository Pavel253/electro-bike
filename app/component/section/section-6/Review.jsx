"use client"

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.scss";
import Btn from "../../../component/ui/Btn/Btn";
import Modal from '../../../component/Modal/ModalReview/Modal'

const Review = ({activeFon, setActiveFon, handleClickFon }) => {
  const [activeModal, setActiveModal] = useState(false);
  useEffect(() => {
    if (activeModal) {
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
  }, [activeModal]);

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Оставить отзыв",
      className: "btn__review",
    }
  ]);

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
            <stop stopColor="#FC501F" />
            <stop offset="1" stopColor="#FC501F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <h2 className="h2">Отзывы о Mi Scooter Pro 2</h2>
      </div>
      <Swiper
        className="swiper container_slider-reviews"
        spaceBetween={100}
        slidesPerView={4}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        height={600}
      >
        <SwiperSlide>
          <div className="review__card">
            <h4 className="h4">Михаил Сафонов</h4>
            <div className="line" />
            <p className="p">
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
              30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
              одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства
              переноски (вес аппарата, развесовка).
              <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
              получил комфорт при небольшом весе самоката.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review__card">
            <h4 className="h4">Михаил Сафонов</h4>
            <div className="line" />
            <p className="p">
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
              30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
              одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства
              переноски (вес аппарата, развесовка).
              <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
              получил комфорт при небольшом весе самоката.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review__card">
            <h4 className="h4">Михаил Сафонов</h4>
            <div className="line" />
            <p className="p">
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
              30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
              одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства
              переноски (вес аппарата, развесовка).
              <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
              получил комфорт при небольшом весе самоката.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review__card">
            <h4 className="h4">Михаил Сафонов</h4>
            <div className="line" />
            <p className="p">
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
              30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
              одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства
              переноски (вес аппарата, развесовка).
              <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
              получил комфорт при небольшом весе самоката.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review__card">
            <h4 className="h4">Михаил Сафонов</h4>
            <div className="line" />
            <p className="p">
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max
              30P, в плюсах Макса - десятидюймовая резина и дальность пробега на
              одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства
              переноски (вес аппарата, развесовка).
              <br /> <br />В итоге купил Xiaomi и поставил 10 дюймовые шины -
              получил комфорт при небольшом весе самоката.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="container__btns">
        <Btn setActiveModal={setActiveModal} items={items} />
      </div>
      <Modal
        activeFon={activeFon}
        setActiveFon={setActiveFon}
        handleClickFon={handleClickFon}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        // activeModalReg={activeModalReg}
        // setActiveModalReg={setActiveModalReg}
      />
    </section>
  );
};

export default Review;
