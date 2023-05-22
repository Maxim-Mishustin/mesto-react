import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <PopupWithForm
          // ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ: EDIT
          name="popupTypeEdit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              id="inputName"
              type="text"
              name="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="inputName-error error" />
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_job"
              id="inputJob"
              type="text"
              name="about"
              placeholder="Профессия"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="inputJob-error error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          // ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ NEW PLACE
          name="popupTypeAdd"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_new-place"
              id="name"
              type="text"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="name-error error" />
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_url"
              id="link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="link-error error" />
          </label>
        </PopupWithForm>
        <Footer />

        <PopupWithForm
          // ПОПАП РЕДАКТИРОВАНИЯ АВАТАРКИ (РЕДАКТИРОВАНИЕ ФОТО АВАТАРА)
          name="popupTypeEditAvatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="avatar"
              className="popup__input popup__input_type_link-avatar"
              name="avatar"
              type="url"
              placeholder="Введите ссылку"
              required
            />
            <span className="avatar-error error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          // ПОПАП: ВЫ УВЕРЕНЫ?
          name="popupTypeDelete"
          title="Обновить аватар"
          buttonText="Да"
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
