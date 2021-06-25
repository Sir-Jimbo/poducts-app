import axios from 'axios';
import { AxiosToken, BaseURL } from '../../Api/AxiosToken';
import authActions from './auth-actions';
import { toast } from 'react-toastify';

BaseURL();

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/api/auth/login', credentials);

    AxiosToken().set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
    toast.info('Welcоme!')
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    toast.error('Internal server error. Please try later')
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {

    AxiosToken().unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth: { token: persistedToken }, } = getState();

  if (!persistedToken) {
    return;
  }

  AxiosToken().set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/api/auth/user-profile');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    //На случай если в локал сторедж остался какой-то токен чтобы его почистить
    dispatch(authActions.logoutSuccess());
  }
};

const authOperations = {
  login,
  logout,
  getCurrentUser
};

export default authOperations;