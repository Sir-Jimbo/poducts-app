import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
    name: null,
    email: null
};

const user = createReducer(initialUserState, {
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
    [authActions.logoutSuccess]: () => null
});

const loading = createReducer(false, {
    [authActions.loginRequest]: () => true,
    [authActions.loginSuccess]: () => false,
    [authActions.loginError]: () => false,
    [authActions.logoutRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false,
    [authActions.getCurrentUserRequest]: () => true,
    [authActions.getCurrentUserSuccess]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.clearError]: () => false,
});


const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.loginError]: () => "Internal server error. Please try later",
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
    [authActions.clearError]: () => null,
});

const isAuthenticated = createReducer(false, {
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logoutSuccess]: () => false
});

export default combineReducers({
    user,
    isAuthenticated,
    token,
    loading,
    error,
});