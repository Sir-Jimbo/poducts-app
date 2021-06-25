import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import Spinner from '../Spinner/Spinner';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

import authOperations from '../../redux/auth/auth-operations';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ProductsPage = lazy(() => import('../../pages/ProductsPage'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Section>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              restricted
              redirectTo="/products"
              component={HomePage} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/products"
              component={LoginPage} />
            <PrivateRoute
              exact
              path="/products"
              restricted
              redirectTo="/login"
              component={ProductsPage}
            />
            <PrivateRoute
              exact
              path="/products/:id"
              redirectTo="/products"
              component={ProductPage}
            />
          </Switch>
        </Suspense>
      </Section>
    </Layout>
  );
}