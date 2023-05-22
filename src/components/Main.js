import React, { useState, useEffect } from "react";
import profileEditPen from "../images/edit-pen.svg";
import api from "../utils/Api";
import Card from "./Card";

// ОСНОВНОЙ КОМПОНЕНТ
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, getCards] = useState([]);

  useEffect(() => {
    // МЕТОД ЗАГРУЗКИ ИНОФРМАЦИИ О ЮЗЕРЕ С СЕРВЕРА
    api
      .getUserInfo()
      .then((profileUserInfo) => {
        setUserName(profileUserInfo.name);
        setUserDescription(profileUserInfo.about);
        setUserAvatar(profileUserInfo.avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));

    // ЗАГРУЖАЕМ КАРТОЧКИ С СЕРВЕРА
    api
      .getCards()
      .then((cardsData) => {
        getCards(
          cardsData.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id,
          }))
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          {/* КНОПКА РЕДАКТИРОВАТЬ АВАТАР */}
          <button
            className="profile__edit-button-avatar"
            type="button"
            onClick={() => {
              onEditAvatar(true);
            }}
          >
            <img
              className="profile__edit-pen"
              src={profileEditPen}
              alt="Ручка редактирования"
            />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__title-edit">
            <h1 className="profile__title">{userName}</h1>
            {/* КНОПКА РЕДАКТИРОВАТЬ ПРОФИЛЬ */}
            <button
              type="button"
              name="edit-button"
              className="profile__edit-button"
              onClick={() => {
                onEditProfile(true);
              }}
            />
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        {/* КНОПКА НОВОЕ МЕСТО */}
        <button
          type="button"
          name="add-button"
          className="profile__add-button"
          onClick={() => {
            onAddPlace(true);
          }}
        />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            likes={card.likes}
            name={card.name}
            link={card.link}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
