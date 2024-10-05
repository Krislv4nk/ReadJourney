

import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseURL } from '../helpers/constants';
import axios from 'axios';

axios.defaults.baseURL = BaseURL;



export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers`);
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
      const response = await axios.post('favorites', { id: _Id });
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