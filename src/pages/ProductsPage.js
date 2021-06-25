import React from 'react';
import { useSelector } from 'react-redux';

import Logo from '../components/Logo/Logo';
import Notification from '../components/Notification/Notification';
import Spinner from '../components/Spinner/Spinner';
import ProductsList from '../components/ProductsList/ProductsList';
import PaginationLink from '../components/PaginationLink/PaginationLink';

import selectors from '../redux/products/products-selectors';


export default function ProductsPage() {
    const isLoadingProducts = useSelector(selectors.getLoading);
    const error = useSelector(selectors.getError);
    return (
        <>
            <Logo />
            <Notification message={error} />
            {isLoadingProducts && <Spinner />}
            <ProductsList />
            <PaginationLink />
        </>
    );
};
