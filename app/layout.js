"use client";
import React, { useState } from "react";

import "./body.scss";
import "./fon.scss";
import "./Header/Header.scss";
import "./Button/Button.scss";

import Footer from "./Footer/Footer";

import Header from "./Header/Header";
import Batarea from "./Section/section-1/Batarea";
import Speed from "./Section/section-2/Speed";
import Desing from "./Section/section-3/Desing";
import Security from "./Section/section-4/Security";
import MobileMi from "./Section/section-5/MobileMi";
import Review from "./Section/section-6/Review";
import Questions from "./Section/section-7/Questions";
import CardBuy from "./Section/section-8/CardBuy";

export default function RootLayout() {
  const [activeFon, setActiveFon] = useState(false);

  const handleClickFon = () => {
    setActiveFon(!activeFon);
  };
  return (
    <html lang="en">
      <body className={activeFon ? "body body__white" : "body body__black"}>
        <Header
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
        />
        <Footer />
      </body>
    </html>
  );
}
