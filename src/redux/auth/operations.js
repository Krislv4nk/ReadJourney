
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorToast } from '../../helpers/services';


axios.defaults.baseURL =import.meta.env.VITE_BASE_URL;

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signUp', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signIn', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

export const signoutUser = createAsyncThunk(
  'auth/signoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/signOut');
      clearToken();
      return;
    } catch (error) {
      errorToast(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/RefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await axios.get('/users/info');

      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);



export const updateUserInfo = createAsyncThunk(
  'user/updateInfo',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.patch('users/update', userData);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateFavoritesBooksThunk = createAsyncThunk(
  'books/favorites',
  async (favoriteBooks, thunkApi) => {
    try {
      const { data } = await axios.patch('books/favorites', favoriteBooks);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
  
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/forgot-password', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/recover-password', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async (verificationToken, thunkApi) => {
    try {
      const { data } = await axios.get(`/users/verify/${verificationToken}`);
      return data;  
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


// export const updateUserInfoThunk = createAsyncThunk(
//   'user/update',
//   async ({ file, userData }, thunkApi) => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', file);
//       Object.entries(userData).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       const { data } = await axios.patch('users/update', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );