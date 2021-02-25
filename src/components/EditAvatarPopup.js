import React from 'react';
import PopupWithForm from '../components/PopupWithForm';

function EditAvatarPopup(props) {
  const urlRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({ avatar: urlRef.current.value });
    urlRef.current.value = '';
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      regularSubmitText="Сохранить"
      loadingSubmitText="Сохранение..."
      name="avatar"
      title="Обновить аватар"
    >
      <label className="popup__label">
        <input
          id="edit-avatar"
          name="avatar"
          required
          className="popup__input"
          placeholder="Введите ссылку на фото"
          type="url"
          ref={urlRef}
        />
        <span className="popup__error" id="edit-avatar-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
