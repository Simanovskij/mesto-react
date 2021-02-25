function ImagePopup(props) {
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      props.onClose();
    }
  }

  return (
    <div
      className={
        props.isOpen
          ? 'popup popup_type_image popup_opened'
          : 'popup popup_type_image'
      }
      onClick={handleOverlayClose}
    >
      <div className="popup__image-wrapper">
        <button
          className="button button_type_close button_type_close-image"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <figure className="popup__figure">
          <img className="popup__fig-image" src={props.card.link} alt="#" />
          <figcaption className="popup__fig-caption">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
