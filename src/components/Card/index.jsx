import React from 'react';
import './Card.scss';

function Card(props) {
  const { name, role, img, langs } = props;

  const getIconClass = lang => {
    switch(lang) {
      case 'angular': return 'list-item--angular';
      case 'cpp': return 'list-item--cpp';
      case 'css': return 'list-item--css';
      case 'html': return 'list-item--html';
      case 'java': return 'list-item--java';
      case 'js': return 'list-item--js';
      case 'mongo': return 'list-item--mongo';
      case 'db': return 'list-item--db';
      case 'php': return 'list-item--php';
      case 'python': return 'list-item--python';
      case 'react': return 'list-item--react';
      case 'vue': return 'list-item--vue';
      default: return '';
    }
  };

  return (
    <div className="card">
      <div className="card__title">
        <span className="card__title__text">{name}</span>
      </div>
      <div className="card__body">
        <div className="card__body__info">
          <span className="card__body__info__title">{role}</span>
          <div className="card__body__info__knowledge">
            <span className="card__body__info__knowledge__title">Conhecimentos</span>
            <ul className="card__body__info__knowledge__list">
              {langs?.map((lang, index) => (
                <li key={index} className={`list-item ${getIconClass(lang)}`}></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card__body__profile-picture">
          <img className="card__body__profile-picture__img" alt={name} src={img} />
        </div>         
      </div>
    </div>
  );
}

export default Card;