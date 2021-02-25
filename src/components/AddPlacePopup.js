import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleChangeName}
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
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
