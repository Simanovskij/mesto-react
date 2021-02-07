import React from 'react';
import api from '../utils/Api';

function Main(props) {

const [userName, setUserName] = React.useState('');
const [userDescription, setUSerDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');

React.useEffect(() => {
  api.getInitialData()
    .then((res) => {
      const [user, cards] = res
      setUserName(user.name);
      setUSerDescription(user.about);
      setUserAvatar(user.avatar);
    })
},[])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Аватар" className="profile__photo" />
          <button className="profile__edit-avatar" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{userName}</h1>
            <button className=" button button_type_edit" aria-label="Редактировать" type="button" onClick={props.onEditProfile} />
          </div>
          <p className="profile__feature">{userDescription}</p>
        </div>
        <button className="button button_type_add" aria-label="Добавить фото" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="cards-list" />
    </main>
  )
}

export default Main;