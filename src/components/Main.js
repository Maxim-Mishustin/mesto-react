import React from "react";
import imageAvatar from "../images/image-avatar.jpg";
import profileEditPen from "../images/edit-pen.svg";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img className="profile__avatar" src={imageAvatar} alt="Аватар" />
          <button className="profile__edit-button-avatar" type="button">
            <img
              className="profile__edit-pen"
              src={profileEditPen}
              alt="Ручка редактирования"
            />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__title-edit">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              type="button"
              name="edit-button"
              className="profile__edit-button"
            />
          </div>
          <p className="profile__text">Исследователь океана</p>
        </div>
        <button
          type="button"
          name="add-button"
          className="profile__add-button"
        />
      </section>
      <section className="elements" />
      {/* шаблон */}
      <template id="templateCards" />
    </main>
  );
}

export default Main;
