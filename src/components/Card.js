function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <article className="card">
      <img className="card__image" src={props.link} alt={props.name} onClick={handleCardClick} />
      <button className="button button_type_delete" aria-label="Удалить" type="button" />
      <div className="card__description">
        <h2 className="card__name">{props.name}</h2>
        <div className="card__likes">
          <button className="button button_type_like" aria-label="Лайк" type="button" />
          <span className="card__like-counter">{props.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;