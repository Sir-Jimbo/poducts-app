import React, { useCallback } from 'react';
import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/default-avatar.png';
import ButtonMenu from '../button/button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      {/* My button
    <button className={s.MenuButton} type="button" onClick={onLogout}>
      Logout
    </button> */}

      {/* Button from Material UI */}
      <ButtonMenu onClick={onLogout} />
    </div>
  );
}