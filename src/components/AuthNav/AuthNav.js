import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink
      to="/login"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;