import { createAction } from '@reduxjs/toolkit';

const getRefreshTokenStart = createAction('auth/getRefreshTokenStart');
const getRefreshTokenSuccess = createAction('auth/getRefreshTokenSuccess');
const getRefreshTokenError = createAction('auth/getRefreshTokenError');

const loginSuccess = createAction('auth/loginSuccess');
const loginRequest = createAction('auth/loginRequest');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');


const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const clearError = createAction('auth/clearError');

const authActions = {
    getRefreshTokenStart,
    getRefreshTokenSuccess,
    getRefreshTokenError,
    loginSuccess,
    loginRequest,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
    clearError
};

export default authActions;