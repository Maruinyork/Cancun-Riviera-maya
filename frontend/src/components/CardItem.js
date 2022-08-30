import React from 'react'
import {NavLink} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <NavLink to={props.path} className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Cancun' className='cards__item__img' />
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </NavLink>
      </li>
    </>
  )
}

export default CardItem

