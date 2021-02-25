import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__label">
        <input
          id="place-name"
          name="name"
          required
          className="popup__input popup__input_type_place-name"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error" id="place-name-error"></span>
      </label>
      <label className="popup__label">
        <input
          id="place-link"
          name="link"
          required
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          type="url"
        />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
