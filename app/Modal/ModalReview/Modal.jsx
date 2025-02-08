import React from "react";

import "./Modal.scss";

const ModalQuestion = ({ activeModal, setActiveModal }) => {
  return (
    <div
      className={activeModal ? "modal__window-user active" : "modal__window-user"}
      onClick={() => setActiveModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={activeModal ? "modal__content active" : "modal__content"}
      >
        <h2 className="h2">Написать отзыв</h2>
        <div className="btn__exit" onClick={() => setActiveModal(false)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <form action="" className="form">
          <input
            type="question"
            placeholder="Enter email..."
            className="question__form"
          />
          <button type="submit" className="btn__form">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalQuestion;
