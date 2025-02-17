import React from "react";
import Image from "next/image";

import img1 from "../../../../public/section4/1.png";
import img2 from "../../../../public/section4/2.png";

import "./Security.scss";

const Security = () => {
  return (
    <section id="section4" className="section__4">
      <div className="container">
        <h2 className="h2">Заботится о вашей безопасности</h2>
        <div className="section__container">
          <div className="card">
            <h4 className="h4">
              Яркие ходовые <br /> огни
            </h4>
            <div className="line"></div>
            <p className="predlog">
              Продуманный угол рассеивания света позволяет сохранять хорошую
              видимость, не ослепляя других участников движения.
            </p>
          </div>
          <div className="line__card"></div>
          <div className="card">
            <h4 className="h4">
              Двойная тормозная
              <br /> система
            </h4>
            <div className="line"></div>
            <p className="predlog">
              При нажатии наручку тормоза системы переднего и заднего колеса
              активируются последовательно, сокращая тормозной путь и
              обеспечивая безопасную и плавную остановку.
            </p>
          </div>
          <div className="line__card"></div>
          <div className="card">
            <h4 className="h4">
              Яркая задняя
              <br /> фара
            </h4>
            <div className="line"></div>
            <p className="predlog">
              При включении ходовых огней задняя фара включается автоматически.
              При нажатии на ручку тормоза она начинает мигать, предупреждая
              других участников движения.
            </p>
          </div>
          <div className="line__card"></div>
          <div className="card">
            <h4 className="h4">
              Отражатели спереди,
              <br /> сбоку и сзади
            </h4>
            <div className="line"></div>
            <p className="predlog">
              Улучшенные отражатели, размещенные с четырех сторон, делают вашу
              поездку в темное время суток безопаснее.
            </p>
          </div>
        </div>
        <div className="section__container-img">
          <Image className="img__1" alt='img' src={img1} />
          <Image className="img__2" alt='img' src={img2} />
        </div>
      </div>
      <svg
        className="svg-10"
        width="860"
        height="1007"
        viewBox="0 0 860 1007"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_0_199)">
          <ellipse
            cx="355"
            cy="503.5"
            rx="223.5"
            ry="225"
            transform="rotate(-90 355 503.5)"
            fill="#FC1F1F"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_199"
            x="-150"
            y="0"
            width="1010"
            height="1007"
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
              result="effect1_foregroundBlur_0_199"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="svg-11"
        width="620"
        height="530"
        viewBox="0 0 620 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_233"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="620"
          height="530"
        >
          <path d="M0 0H620V530H114L57 338H0V0Z" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_0_233)">
          <path
            d="M933.826 92.3551C967.477 142.712 967.951 210.168 940.856 263.505C912.781 318.755 856.299 350.6 794.702 348.752C735.25 346.936 675.016 314.937 649.341 259.63C625.327 207.892 632.705 133.757 691.773 109.673C741.657 89.3426 807.938 113.378 829.093 163.794C850.249 214.211 825.921 274.476 783.152 305.452C729.178 344.52 658.243 326.251 603.646 298.945C537.418 265.969 476.089 211.196 398.792 207.994C337.848 205.471 277.847 235.355 239.131 281.887C219.587 305.067 206.127 332.749 199.971 362.428C193.538 394.865 198.99 433.244 220.987 459.054C245.452 487.77 284.903 485.815 312.031 461.691C341.834 435.141 348.714 393.384 353.266 355.748C361.938 283.874 361.636 203.67 321.774 140.355C286.414 84.3393 218.452 43.2549 151.27 63.6017C75.1086 86.6746 37.1803 165.465 23.9806 238.08C16.8277 277.475 14.7251 317.699 12.3547 357.609C9.9394 398.183 7.80173 438.809 3.47506 479.278C-4.80312 555.947 -21.5496 632.676 -61.493 699.572C-98.9557 762.329 -155.749 813.844 -227.925 831.702C-295.109 848.423 -366.461 837.052 -430.163 812.378C-509.807 781.621 -580.319 731.585 -651.273 685.099L-878.872 536.009L-988.001 464.513C-990.35 462.975 -988.239 459.134 -985.89 460.644L-761.018 607.939C-687.868 655.869 -615.591 705.571 -540.889 751.052C-474.376 791.525 -402.248 826.532 -323.669 833.725C-288.87 836.914 -253.382 834.666 -219.702 824.864C-183.147 813.93 -149.659 794.574 -121.929 768.35C-0.478034 655.084 -0.274824 478.428 9.97239 325.169C14.8765 252.156 23.2364 173.659 71.2355 114.722C91.9629 89.2259 119.487 68.2365 151.307 58.9512C180.243 50.7882 211.067 52.536 238.873 63.9162C299.356 87.981 338.727 144.8 353.475 206.562C361.676 241.117 363.282 276.946 361.489 312.265C359.639 348.347 356.711 387.117 343.868 421.143C332.924 450.113 310.576 477.229 278.963 483.854C250.715 489.757 224.856 475.249 210.115 451.475C178.005 399.695 195.131 332.923 229.512 287.018C263.622 241.505 317.065 209.988 373.824 204.321C446.072 197.16 507.964 238.555 567.182 273.684C623.258 306.971 696.922 342.867 762.067 312.756C814.107 288.708 847.444 222.368 825.815 167.379C803.996 111.798 724.033 87.9529 675.652 123.66C617.654 166.436 638.265 256.676 683.812 299.746C729.359 342.815 801.493 356.414 859.844 333.269C920.559 309.143 956.026 245.382 955.86 181.629C956.013 150.723 947.026 120.47 930.029 94.6751C928.442 92.2941 932.254 90.0983 933.826 92.3551Z"
            fill="#FF4C0D"
          />
        </g>
      </svg>
      <svg
        className="svg-12"
        width="1020"
        height="1100"
        viewBox="0 0 1020 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_0_194)">
          <ellipse
            cx="471.5"
            cy="474"
            rx="471.5"
            ry="474"
            transform="matrix(2.87868e-08 1 1 -2.87868e-08 280 280)"
            fill="url(#paint0_linear_0_194)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_194"
            x="0"
            y="0"
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
              result="effect1_foregroundBlur_0_194"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_194"
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
    </section>
  );
};

export default Security;
