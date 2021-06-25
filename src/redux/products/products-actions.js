
import { createAction } from '@reduxjs/toolkit';

export const fetchProductsRequest = createAction('products/fetchProductsRequest');
export const fetchProductsSuccess = createAction('products/fetchProductsSuccess');
export const fetchProductsError = createAction('products/fetchProductsError');

export const fetchProductsPageRequest = createAction('products/fetchProductsPageRequest');
export const fetchProductsPageSuccess = createAction('products/fetchProductsPageSuccess');
export const fetchProductsPageError = createAction('products/fetchProductsPageError');

export const clearError = createAction('products/clearError');