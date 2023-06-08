import { useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card({
  card,
  onCardLike,
  onCardDelete,
  onCardClick,
  onConfirmationPopup,
}) {
  const currentUser = useContext(CurrentUserContext)
  const isLiked = card.likes.some((user) => user._id === currentUser._id)
  const likeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`
  const isOwner = card.owner._id === currentUser._id

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
    onConfirmationPopup(true)
  }

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <div className="element">
      {/* ДАЛЕЕ В РАЗМЕТКЕ ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ ДЛЯ УСЛОВНОГО РЕНДЕРИНГА */}

      {isOwner && (
        <button
          className="element__delete"
          onClick={handleDeleteClick}
          type="button"
        ></button>
      )}
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container-like">
          <button
            className={likeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__count-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
