import React from "react";

import "./ModalUser.scss";

const ModalUser = ({ activeModal, setActiveModal }) => {
  return (
    <div
      className={activeModal ? "modal__window-user active" : "modal__window-user"}
      onClick={() => setActiveModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={activeModal ? "modal__content active" : "modal__content"}
      >
        <h2 className="h2">Зарегестрируйтесь</h2>
        <div className="btn__exit" onClick={() => setActiveModal(false)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
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
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <form action="" className="form">
          <input
            type="email"
            placeholder="Enter email..."
            className="email__form"
          />
          <input
            type="test"
            placeholder="Enter password..."
            className="passwd__form"
          />
          <button type="submit" className="btn__form">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalUser;
