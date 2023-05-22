import React from "react";

// ОБЩИЙ ПОПАП
function PopupWithForm({ title, name, isOpen, onClose, buttonText, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          aria-label="close"
          className="popup__button-close"
          type="button"
        ></button>
        <form className="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          {children}

          <button
            className="popup__button popup__button-submit popup__button_type_disabled"
            type="submit"
          >
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
