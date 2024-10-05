import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL =import.meta.env.VITE_BASE_URL;



export const getRecommendedThunk = createAsyncThunk(
  'books/getRecommended',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books`);
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoritesThunk = createAsyncThunk(
  'favorites/getFavorites',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`favorites`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addFavoriteCamperThunk = createAsyncThunk(
  'favorites/addFavorite',
  async (_Id, thunkAPI) => {
    try {
      const response = await axios.post('favorites/add', { id: _Id });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const removeFavoriteThunk = createAsyncThunk(
  'favorites/removeFavorite',
  async (_Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${_Id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


export const refreshFavoritesThunk = createAsyncThunk(
  'favorites/refreshFavorites',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/favorites`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)