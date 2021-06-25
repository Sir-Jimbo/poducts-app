import axios from 'axios';
import { AxiosToken, BaseURL } from '../../Api/AxiosToken';
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsError,
    fetchProductsPageRequest,
    fetchProductsPageSuccess,
    fetchProductsPageError,
} from './products-actions';

BaseURL();

const fetchProducts = (page = 1) => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    AxiosToken().set(persistedToken);
    dispatch(fetchProductsRequest());

    try {
        const { data } = await axios.get(`/api/products?page=${page}`);
        AxiosToken().set(data.token);
        dispatch(fetchProductsSuccess(data));
    }
    catch (error) {
        dispatch(fetchProductsError(error.message))
    }
};

const fetchProductPage = (id) => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    AxiosToken().set(persistedToken);
    dispatch(fetchProductsPageRequest());

    try {
        const { data } = await axios.get(`/api/products/${id}`);
        AxiosToken().set(data.token);
        dispatch(fetchProductsPageSuccess(data));
    }
    catch (error) {
        dispatch(fetchProductsPageError(error.message))
    }
};

const operations = {
    fetchProducts,
    fetchProductPage
};

export default operations;