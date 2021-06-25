import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductItem from '../ProductItem/ProductItem';

import selectors from '../../redux/products/products-selectors';
import operations from '../../redux/products/products-operations';
import s from './ProductsList.module.css';


export default function ProductsList() {

   const products = useSelector(selectors.getAllProducts);
   const dispatch = useDispatch();

   return (
      <>
         <TransitionGroup
            component="ul"
            className={s.list}
         >
            {products.length !== 0 &&
               products.data.map(({ id, title, price, thumbnail }) => (
                  <CSSTransition
                     key={id}
                     timeout={250}
                     classNames={s}
                  >
                     <ProductItem
                        id={id}
                        title={title}
                        price={price}
                        image={thumbnail}
                        onClick={
                           () => { dispatch(operations.fetchProductPage(id)) }}
                     />
                  </CSSTransition>
               ))
            }
         </TransitionGroup >
      </>
   )
}