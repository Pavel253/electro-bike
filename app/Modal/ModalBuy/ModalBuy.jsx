import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../../Button/Button";

import bake1 from "../../../public/Байк.png";
import bake2 from "../../../public/Modal/white/1.png";
import bake3 from "../../../public/Modal/white/2.png";
// import bake4 from "../../../public/Modal/white/3.png";

import "./ModalBuy.scss";
import "swiper/css";

const ModalByu = ({
  activeModal,
  setActiveModal,
  activeFon,
  setActiveFon,
  handleClickFon,
}) => {
  return (
    <div
      className={activeModal ? "modal__window-buy active" : "modal__window-buy"}
      onClick={() => setActiveModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={activeModal ? "modal__content active" : "modal__content"}
      >
        <div className="modal__left">
          <h2 className="h2">Купить самокат</h2>
          <h4 className="h4">Mi Electric Scooter Pro 2 </h4>
          <span className="span">54 990 ₽</span>
          <Button
            activeFon={activeFon}
            setActiveFon={setActiveFon}
            handleClick={handleClickFon}
          />
          <button className="btn btn__buy">Купить</button>
        </div>
        <div className="modal__right">
          <div className="btn__exit" onClick={() => setActiveModal(false)}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Swiper
            className="swiper"
            spaceBetween={100}
            // slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            height={600}
          >
            <SwiperSlide>
              <Image className="bake" src={bake1} />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="bake1" src={bake2} />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="bake2" src={bake3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ModalByu;
