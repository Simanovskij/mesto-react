import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';


function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;

  const cardDeleteButtonClassName = isOwn ? `button button_type_delete` : `button_hidden`;

  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? `button button_type_like-black` : `button button_type_like`;

  function handleCardClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <article className="card">
      <img className="card__image" src={props.link} alt={props.name} onClick={handleCardClick} />
      <button className={cardDeleteButtonClassName} aria-label="Удалить" type="button" />
      <div className="card__description">
        <h2 className="card__name">{props.name}</h2>
        <div className="card__likes">
          <button className={cardLikeButtonClassName} aria-label="Лайк" type="button" />
          <span className="card__like-counter">{props.likes.length}</span>
          {console.log(isOwn)}
        </div>
      </div>
    </article>
  )
}

export default Card;