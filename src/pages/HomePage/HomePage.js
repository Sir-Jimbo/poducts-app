import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <h1 className={s.Title}>Hello</h1>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <div className={s.text}>
          <h3>Your Products</h3>
        </div>
      </CSSTransition>
    </>
  )
};

export default HomePage;