import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ProductItem.module.css';

const ProductItem = ({ id, title, price, image, onClick }) => {
   return (
      <li key={id} className={s.item}>
         <img src={image} alt={title} />
         <h1 className={s.title}>{title}</h1>
         <p className={s.price}>{price}</p>
         <NavLink
            to={`/products/${id}`}
            onClick={onClick}
            className="NavLink"
            activeClassName="NavLink--active"
         >
            <button
               className={s.button}
               type="button"
            >
               Подробнее
            </button>
         </NavLink>
      </li >
   )
}

export default ProductItem;