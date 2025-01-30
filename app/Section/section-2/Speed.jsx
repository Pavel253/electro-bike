import React from "react";
import Image from "next/image";

import img from "../../../public/icons.png";
import "./Speed.scss";

const Speed = () => {
  return (
    <section className="section__2">
      <div className="section__container">
        <div className="card__section-2">
          <Image src={img} className="section__icon" width={60} height={40} />
          <h3 className="h3">Высокая скорость передвижения</h3>
          <p className="p">
            Двигатель мощностью до 600 Вт позволяет развивать скорость до 25
            км/ч.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speed;
