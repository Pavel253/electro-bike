"use client";
import React, { useState } from "react";

import "./body.scss";
import "./fon.scss";
import "./component/ui/Button/Button.scss";

import Page from "./(dashboard)/product/page";

export default function RootLayout() {
const [activeFon, setActiveFon] = useState(false);
      const handleClickFon = () => {
        setActiveFon(!activeFon);
      };
  return (
    <html lang="en">
      <body className={activeFon ? "body body__white" : "body body__black"}>
        <Page handleClickFon={handleClickFon} activeFon={activeFon} setActiveFon={setActiveFon} />
      </body>
    </html>
  );
}
