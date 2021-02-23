import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';


function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  });

  React.useEffect(() => {
    api.getInitialData()
      .then((res) => {
        const [user, cards] = res;
        setCurrentUser(user);
        setCards(cards);
      })
  }, [])


  const handleCardClick = (name, link) => {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link
    })
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      name: '',
      link: ''
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
          />
          <Footer />
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
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
            isOpen={isAddPlacePopupOpen}
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
            isOpen={isEditAvatarPopupOpen}
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
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
