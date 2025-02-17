"use client";
import React, { useState } from "react";

import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Batarea from "../../component/section/section-1/Batarea";
import Speed from "../../component/section/section-2/Speed";
import Desing from "../../component/section/section-3/Desing";
import Security from "../../component/section/section-4/Security";
import MobileMi from "../../component/section/section-5/MobileMi";
import Review from "../../component/section/section-6/Review";
import Questions from "../../component/section/section-7/Questions";
import CardBuy from "../../component/section/section-8/CardBuy";

const Product = ({handleClickFon, activeFon, setActiveFon}) => {
    return (
        <div>
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
        </div>
    );
};

export default Product;