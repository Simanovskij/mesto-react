import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
    >
      <label className="popup__label">
        <input
          id="name"
          name="name"
          required
          className="popup__input popup__input_type_name"
          type="text"
          minLength={2}
          maxLength={40}
          placeholder="Имя"
          onChange={handleChangeName}
          value={name}
        />
        <span className="popup__error" id="name-error" />
      </label>
      <label className="popup__label">
        <input
          id="feature"
          name="feature"
          required
          className="popup__input popup__input_type_feature"
          type="text"
          minLength={2}
          maxLength={200}
          placeholder="Занятие"
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="popup__error" id="feature-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
