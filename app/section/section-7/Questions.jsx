import React from "react";

import "./Questions.scss";

const Questions = () => {
  return (
    <section id="section7" className="section__7">
      <div className="container">
        <div className="container__left">
          <h2 className="h2">Часто задаваемые вопросы</h2>
          <p className="p">
            Все ваши часто задаваемые вопросыо электросамокате Mi Scooter Pro 2.{" "}
            <br />
            <br />
            Если у вас есть собственный вопрос - задайте его через форму
            обратной связи.
          </p>
          <button className="btn">Задать вопрос</button>
        </div>
        <div className="container__right">
          <div className="questions__container">
            <h5 className="h5">На него нужны права категории M?</h5>
            <div className="line"></div>
            <p className="p">
              Продуманный угол рассеивания света позволяет сохранять хорошую
              видимость, не ослепляя других участников движения.
            </p>
          </div>
          <div className="questions__container">
            <h5 className="h5">У меня вес 135 кг, выдержит ли этот самокат?</h5>
            <div className="line"></div>
            <p className="p">
              Самокат определенно выдержит и будет ехать, но не с максимальной
              скоростью.
            </p>
          </div>
          <div className="questions__container">
            <h5 className="h5">Есть ли влагозащита?</h5>
            <div className="line"></div>
            <p className="p">
              Электросамокат имеет степень защиты IP54. Он защищен от попадания
              пыли и брызг, падающих в любом направлении. Погружение в воду
              может привести к поломке.
            </p>
          </div>
          <div className="questions__container">
            <h5 className="h5">Это версия для Китая или Европы?</h5>
            <div className="line"></div>
            <p className="p">
              Это Европейская версия, со всеми обновлениями и евро-вилкой.
            </p>
          </div>
        </div>
      </div>
      <svg
      className="svg-15"
        width="840"
        height="1139"
        viewBox="0 0 840 1139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_0_268)">
          <ellipse
            cx="269"
            cy="569.5"
            rx="289.5"
            ry="291"
            transform="rotate(-90 269 569.5)"
            fill="url(#paint0_linear_0_268)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_268"
            x="-302"
            y="0"
            width="1142"
            height="1139"
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
              result="effect1_foregroundBlur_0_268"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_268"
            x1="5.18258"
            y1="436.816"
            x2="410.761"
            y2="688.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FC1F1F" />
            <stop offset="1" stop-color="#FCCB1F" stop-opacity="0.31" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Questions;
