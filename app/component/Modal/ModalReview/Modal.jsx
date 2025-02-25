"use client";
import React, { useState, useEffect } from "react";
import "../Modal.scss";

const Modal = ({ activeModal, setActiveModal }) => {
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    setUserName(storedName || "");
    setIsAuthorized(!!storedName);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthorized) {
      setMessage("Пожалуйста, авторизуйтесь для отправки отзыва");
      return;
    }

    if (!review.trim()) {
      setMessage("Пожалуйста, напишите отзыв");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          feedback: review.trim()
        }),
      });

      if (response.ok) {
        setReview("");
        setMessage("Отзыв успешно отправлен");
        setTimeout(() => {
          setActiveModal(false);
          setMessage("");
        }, 1500);
      } else {
        const data = await response.json();
        setMessage(data.error || "Ошибка при отправке отзыва");
      }
    } catch (error) {
      setMessage("Произошла ошибка при отправке");
    }
  };

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
        {!isAuthorized ? (
          <p className="auth-message">Для отправки отзыва необходимо авторизоваться</p>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Напишите отзыв"
              className="question__form"
            />
            <button type="submit" className="btn__form">
              Отправить
            </button>
          </form>
        )}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
