function PopupWithForm(props) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_opened`
          : `popup popup_type_${props.name}`
      }
    >
      <div className="popup__container">
        <button
          className="button button_type_close "
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={props.name}
          className="popup__form"
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="button button_type_submit" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
