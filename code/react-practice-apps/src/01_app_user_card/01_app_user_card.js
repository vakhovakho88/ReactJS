import React from 'react';
import './01_app_user_card.css';
export default function app_user_card_1({name, surname, img, description}) {
  return (
    <div className='user-card'>
      <h3 className='user-card-header'>{name}  {surname}</h3>
      <img className='user-card-img' src={img} alt='random' />
      <div className='user-card-info'>
        <p className='user-card-info-text'>{description}
        </p>
      </div>
    </div>

  )
}
