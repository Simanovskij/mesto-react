import React from 'react';
import PopupWithForm from '../components/PopupWithForm';

function SubmitPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      name="submit"
      title="Вы уверены?"
      regularSubmitText="Да"
      loadingSubmitText="Удаление..."
      isLoading={props.isLoading}
    >
      {' '}
    </PopupWithForm>
  );
}

export default SubmitPopup;
