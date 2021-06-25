import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchProductsRequest,
   fetchProductsSuccess,
   fetchProductsError,
   fetchProductsPageRequest,
   fetchProductsPageSuccess,
   fetchProductsPageError,
   clearError
} from './products-actions';

const initialState = {
   products: [],
}
const products = createReducer(initialState.products, {
   [fetchProductsSuccess]: (_, { payload }) => payload,

});

const loading = createReducer(false, {
   [fetchProductsRequest]: () => true,
   [fetchProductsSuccess]: () => false,
   [fetchProductsError]: () => false,
   [fetchProductsPageRequest]: () => true,
   [fetchProductsPageSuccess]: () => false,
   [fetchProductsPageError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
   [fetchProductsError]: setError,
   [fetchProductsPageError]: setError,
   [clearError]: () => null,
});

export default combineReducers({
   products,
   loading,
   error,
});