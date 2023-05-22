import React from "react";

// ШАБЛОН
function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <div className="element">
      <button className="element__delete" type="button"></button>
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container-like">
          <button className="element__like" type="button"></button>
          <p className="element__count-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
