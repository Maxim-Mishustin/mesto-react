import './App.css';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип Mesto Russia" />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img className="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Аватар" />
          <button className="profile__edit-button-avatar" type="button">
            <img className="profile__edit-pen" src="<%=require('./images/edit-pen.svg')%>" alt="Ручка редактирования" />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__title-edit">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" name="edit-button" className="profile__edit-button" />
          </div>
          <p className="profile__text">Исследователь океана</p>
        </div>
        <button type="button" name="add-button" className="profile__add-button" />
      </section>
      <section className="elements" />
      {/* шаблон */}
      <template id="templateCards" />
    </main>
    <footer className="footer">
      <p className="footer__copyright">©&nbsp;2020 Mesto Russia</p>
    </footer>
    {/* popup редактирования профиля */}
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button aria-label="close" className="popup__button-close popup__button-close-edit" type="button" />
        <form className="popup__form" name="formProfile">
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__label">
            <input id="inputName" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" required minLength={2} maxLength={40} autoComplete="off" />
            <span className="inputName-error error" />
          </label>
          <label className="popup__label">
            <input id="inputJob" type="text" name="about" className="popup__input popup__input_type_job" placeholder="Профессия" required minLength={2} maxLength={200} autoComplete="off" />
            <span className="inputJob-error error" />
          </label>
          <button className="popup__button popup__button-submit popup__button_type_disabled" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    {/* popup добавления карточки */}
    <div className="popup popup_type_add">
      <div className="popup__container">
        <button aria-label="close" className="popup__button-close popup__button-close-add" type="button" />
        <form className="popup__form popup__form-add" name="formAddCard">
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__label">
            <input id="name" type="text" name="name" className="popup__input popup__input_type_new-place" placeholder="Название" required minLength={2} maxLength={30} />
            <span className="name-error error" />
          </label>
          <label className="popup__label">
            <input id="link" type="url" name="link" className="popup__input popup__input_type_url" placeholder="Ссылка на картинку" required />
            <span className="link-error error" />
          </label>
          <button className="popup__button popup__button-submit" type="submit">
            Создать
          </button>
        </form>
      </div>
    </div>
    {/* popup для большой карточки */}
    <div className="popup popup_type_big-card">
      <div className="popup__container-big-card">
        <button aria-label="close" className="popup__button-close popup__button-close-big-card" type="button" />
        <figure className="popup__card-caption">
          <img className="popup__card-image" />
          <figcaption className="popup__card-title" />
        </figure>
      </div>
    </div>
    {/* popup подтверждения удаления карточки */}
    <div className="popup popup_type_delete">
      <div className="popup__container">
        <button className="popup__button-close" type="button" />
        <h2 className="popup__title popup__title_margin">Вы уверены?</h2>
        <form className="popup__form">
          <button className="popup__button popup__button-submit popup__button-submit_margin" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
    {/* popup редактирования аватара */}
    <div className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <button className="popup__button-close" type="button" />
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form" name="editAvatar" id="editAvatar" noValidate>
          <label className="popup__label">
            <input id="avatar" className="popup__input popup__input_type_link-avatar" name="avatar" type="url" placeholder="Введите ссылку" required />
            <span className="avatar-error error" />
          </label>
          <button className="popup__button popup__button-submit popup__button_type_disabled" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div>
    );
  }

export default App;
