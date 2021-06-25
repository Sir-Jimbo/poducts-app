import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pagination from '../Pagination/Pagination'

import operations from '../../redux/products/products-operations';
import s from './PaginationLink.module.css';

export default function PaginationLink() {
   const dispatch = useDispatch();

   useEffect((page) => {
      dispatch(operations.fetchProducts(page));
   }, [dispatch]);

   const pages = [];
   for (let i = 1; i <= Math.ceil(20); i++) {
      pages.push(i);
   }

   return (
      <>
         <TransitionGroup
            component="ul"
            className={s.list}
         >
            {pages.map(page => {
               return (
                  <CSSTransition
                     key={page}
                     timeout={250}
                     classNames={s}
                  >
                     {<Pagination
                        page={page}
                        onClick={
                           () => { dispatch(operations.fetchProducts(page)) }}
                     />
                     }
                  </CSSTransition>
               )
            })}
         </TransitionGroup>
      </>
   )
}
