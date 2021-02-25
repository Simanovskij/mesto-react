import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: '',
  });

  React.useEffect(() => {
    api.getInitialData().then(
      (res) => {
        const [user, cards] = res;
        setCurrentUser(user);
        setCards(cards);
      },
      (err) => console.log(err)
    );
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card, isLiked).then(
      (newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      },
      (err) => console.log(err)
    );
  }

  function handleCardDelete(card) {
    api.delCard(card).then(
      () => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      },
      (err) => console.log(err)
    );
  }

  const handleCardClick = (name, link) => {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    });
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
  };

  function handleUpdateUser(data) {
    api.setUserInfo(data).then(
      (user) => {
        console.log(user);
        setCurrentUser(user);
        closeAllPopups();
      },
      (err) => console.log(err)
    );
  }

  function handleUpdateAvatar(data) {
    api.setAvatar(data).then(
      (user) => {
        setCurrentUser(user);
        console.log(currentUser);
        closeAllPopups();
      },
      (err) => console.log(err)
    );
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            onClose={closeAllPopups}
            name="submit"
            title="Вы уверены?"
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
