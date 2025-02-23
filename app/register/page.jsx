"use client";
import React, { useState, useEffect } from "react";

import Menu from "./HeaderMenu/HeaderMenu";
import "./Register.scss";

export default function Register() {
  const [activeFon, setActiveFon] = useState(false);

  const handleClickFon = () => {
    setActiveFon(!activeFon);
  };

  useEffect(() => {
    if (activeFon) {
      document.body.style.backgroundColor = "#e0e0e0";
    } else {
      document.body.style.backgroundColor = "rgb(21, 21, 21)";
    }

    return () => {
      document.body.style.backgroundColor = "rgb(21, 21, 21)";
    };
  }, [activeFon]);
  return (
    <main className="main">
      <header className="header">
        <Menu />
      </header>
      <section className="section__register">
        <div className="container">
          <h2 className="h2">Зарегестрируйтесь</h2>
          <svg
            className="svg-22"
            width="727"
            height="604"
            viewBox="0 0 727 604"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M307.917 2C250.21 40.9684 53.3279 195.018 101.879 216.099C147.079 235.726 344.633 176.812 256.155 213.544C169.022 249.719 -73.4791 428.19 25.2195 470.033C121.103 510.683 307.261 404.873 263.821 409.664C221.335 414.35 32.566 503.252 14.9983 566.176C-2.56942 629.101 165.761 604.506 463.774 520.181C702.306 452.686 733.252 425.102 723.776 420.204"
              stroke="orange"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <form action="" className="form">
            <input
              type="test"
              placeholder="Напиши имя..."
              className="email__form"
            />
            <input
              type="test"
              placeholder="Напиши пароль..."
              className="passwd__form"
            />
            <button type="submit" className="btn__form">
              Отправить
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
