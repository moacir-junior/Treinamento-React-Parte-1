import React from 'react';
import './Card.scss';

import profileImg from '../../assets/img/profile.jpeg';

function Card() {
  return (
    <div className="card">
      <div className="card__title">
        <span className="card__title__text">Moacir Zimermann Junior</span>
      </div>
      <div className="card__body">
        <div className="card__body__info">
          <span className="card__body__info__title">Programador</span>
          <div className="card__body__info__knowledge">
            <span className="card__body__info__knowledge__title">Conhecimentos</span>
            <ul className="card__body__info__knowledge__list">
              <li className="list-item list-item--javascript"></li>
              <li className="list-item list-item--html"></li>
              <li className="list-item list-item--css"></li>
              <li className="list-item list-item--react"></li>
              <li className="list-item list-item--cpp"></li>
              <li className="list-item list-item--java"></li>
            </ul>
          </div>
        </div>
        <div className="card__body__profile-picture">
          <img className="card__body__profile-picture__img" src={profileImg} />
        </div>         
      </div>
    </div>
  );
}

export default Card;