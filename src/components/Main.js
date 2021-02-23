import React from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt="Аватар" className="profile__photo" />
          <button className="profile__edit-avatar" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className=" button button_type_edit" aria-label="Редактировать" type="button" onClick={props.onEditProfile} />
          </div>
          <p className="profile__feature">{currentUser.about}</p>
        </div>
        <button className="button button_type_add" aria-label="Добавить фото" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="cards-list">
        {props.cards.map(card => <Card key={card._id} 
        card={card} 
        onCardClick={props.onCardClick} 
        onCardLike={props.onCardLike}
        onCardDelete={props.onCardDelete} />)}
      </section>
    </main>
  )
}

export default Main;