import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL =import.meta.env.VITE_BASE_URL;



export const getBookByISBNThunk = createAsyncThunk(
  'books/getBookByISBN',
  async (isbn, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/${isbn}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoritesThunk = createAsyncThunk(
  'books/getFavorites',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/favorites`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBookByIdThunk = createAsyncThunk(
  'books/getBookById',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/favorites/${bookId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteBookThunk = createAsyncThunk(
  'books/addFavoriteBook',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.post(`/books/favorites/${bookId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteBookThunk = createAsyncThunk(
  'books/removeFavoriteBook',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/books/favorites/${bookId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCurrentPageThunk = createAsyncThunk(
  'books/updateCurrentPage',
  async ({ bookId, page }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/books/favorites/${bookId}/page`, { page });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentPageThunk = createAsyncThunk(
  'books/getCurrentPage',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/favorites/${bookId}/page`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);