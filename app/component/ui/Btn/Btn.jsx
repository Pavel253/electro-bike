import React from "react";

const Btn = ({ items, setActiveModal }) => {
  return (
    <div className="btn">
      {items.map((item) => (
        <button
          key={item.id}
          className={item.className}
          onClick={() => setActiveModal(true)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Btn;
