import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isPopupAvatarEditOpen, setIsPopupAvatarEditOpen] = React.useState(false);

  const handleEditProfileClick = () => {
    setIsPopupProfileOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsPopupAvatarEditOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsPopupAddPlaceOpen(true)
  }

  const closeAllPopups = () => {
    setIsPopupProfileOpen(false)
    setIsPopupAvatarEditOpen(false)
    setIsPopupAddPlaceOpen(false)
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isPopupProfileOpen}
          onClose={closeAllPopups}
          name='edit'
          title='Редактировать профиль'
          children={
            <>
              <label className="popup__label">
                <input id="name" name="name" required className="popup__input popup__input_type_name" type="text" minLength={2} maxLength={40} placeholder="Имя" />
                <span className="popup__error" id="name-error" />
              </label>
              <label className="popup__label">
                <input id="feature" name="feature" required className="popup__input popup__input_type_feature" type="text" minLength={2} maxLength={200} placeholder="Занятие" />
                <span className="popup__error" id="feature-error" />
              </label>
            </>
          }
        />
        <PopupWithForm
          onClose={closeAllPopups}
          name='submit'
          title='Вы уверены?'
        />
        <PopupWithForm
          isOpen={isPopupAddPlaceOpen}
          onClose={closeAllPopups}
          name='add'
          title='Новое место'
          children={
            <>
              <label className="popup__label">
                <input id="place-name" name="name" required className="popup__input popup__input_type_place-name" placeholder="Название" type="text"
                  minLength="2" maxLength="30" />
                <span className="popup__error" id="place-name-error"></span>
              </label>
              <label className="popup__label">
                <input id="place-link" name="link" required className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" type="url" />
                <span className="popup__error" id="place-link-error"></span>
              </label>
            </>
          }
        />
        <PopupWithForm
          isOpen={isPopupAvatarEditOpen}
          onClose={closeAllPopups}
          name='avatar'
          title='Обновить аватар'
          children={
            <>
              <label className="popup__label">
                <input id="edit-avatar" name="avatar" required className="popup__input" placeholder="Введите ссылку на фото" type="url" />
                <span className="popup__error" id="edit-avatar-error" />
              </label>
            </>
          }
        />
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
