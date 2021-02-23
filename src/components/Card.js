import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';


function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = isOwn ? `button button_type_delete` : `button_hidden`;

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? `button button_type_like-black button button_type_like` : `button button_type_like`;

  function handleCardClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  function handleLikeClick () {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <article className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить" type="button" />
      <div className="card__description">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Лайк" type="button" />
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;