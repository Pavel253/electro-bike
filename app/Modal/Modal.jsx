import React, { useState } from "react";

import "./Modal.scss";
import ModalBuy from "./ModalBuy/ModalBuy";
import ModalUser from "./ModalUser/ModalUser";

const Modal = ({ activeModal, setActiveModal }) => {
  return (
    <div
      className={activeModal ? "modal__window active" : "modal__window"}
      onClick={() => setActiveModal(false)}
    >
      {/* <ModalBuy activeModal={activeModal} setActiveModal={setActiveModal} /> */}
      <ModalUser activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default Modal;
