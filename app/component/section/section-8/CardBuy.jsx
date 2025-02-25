import React from "react";

import "./CardBuy.scss";

import img from "../../../../public/section8/Байк.png";
import Image from "next/image";
import SetCard from "./SetCard";
import Button from "../../../component/ui/Button/Button";

const CardBuy = ({ setActiveModalBuy, activeModalBuy, activeFon, setActiveFon, handleClickFon }) => {
  return (
    <section className="section__8">
      <div className="container">
        <div className="container__left">
          <h2 className="h2">Mi Electric Scooter Pro 2</h2>
          <span className="span">54 990 ₽</span>
          <Button
            handleClick={handleClickFon}
            activeFon={activeFon}
            setActiveFon={setActiveFon}
          />
          <button onClick={() => setActiveModalBuy(true)} className="btn">Купить</button>
        </div>
        <div className="container__right">
          <Image alt='img' className="img__bake" src={img} />
          <SetCard />
        </div>
      </div>
    </section>
  );
};

export default CardBuy;
