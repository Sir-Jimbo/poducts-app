import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /products
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const shouldRedirect = isLoggedIn && restricted;

  return (

    <Route {...routeProps}>
      {shouldRedirect
        ? <Redirect to={redirectTo} />
        : children
      }
    </Route>
  );
};