"use client";

import React, { useState, useEffect } from "react";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Batarea from "./component/section/section-1/Batarea";
import Speed from "./component/section/section-2/Speed";
import Desing from "./component/section/section-3/Desing";
import Security from "./component/section/section-4/Security";
import MobileMi from "./component/section/section-5/MobileMi";
import Review from "./component/section/section-6/Review";
import Questions from "./component/section/section-7/Questions";
import CardBuy from "./component/section/section-8/CardBuy";

export default function About() {
  const [activeFon, setActiveFon] = useState(false);
  const [activeModalBuy, setActiveModalBuy] = useState(false);

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
    <main className={activeFon ? "main main__white" : "main main__black"}>
      <Header
        activeModalBuy={activeModalBuy}
        setActiveModalBuy={setActiveModalBuy}
        handleClickFon={handleClickFon}
        activeFon={activeFon}
        setActiveFon={setActiveFon}
      />
      <Batarea />
      <Speed />
      <Desing />
      <Security />
      <MobileMi />
      <Review
        handleClickFon={handleClickFon}
        activeFon={activeFon}
        setActiveFon={setActiveFon}
      />
      <Questions
        handleClickFon={handleClickFon}
        activeFon={activeFon}
        setActiveFon={setActiveFon}
      />
      <CardBuy
        handleClickFon={handleClickFon}
        activeFon={activeFon}
        setActiveFon={setActiveFon}
        activeModalBuy={activeModalBuy}
        setActiveModalBuy={setActiveModalBuy}
      />
      <Footer />
    </main>
  );
}
