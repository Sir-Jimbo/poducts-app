import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Pagination.module.css';

const Pagination = ({ page, onClick }) => {
   return (
      <NavLink
         to={`/products?page=${page}`}
         onClick={onClick}
         className={s.link}
      >
         <li key={page} className={s.item} >
            <p className={s.label}>{page}</p>
         </li>
      </NavLink>
   )
}

export default Pagination;