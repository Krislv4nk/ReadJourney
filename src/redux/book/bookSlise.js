

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getRecommendedThunk,
  getBookByISBNThunk,
  getFavoritesThunk,
  getBookByIdThunk,
  addFavoriteBookThunk,
  removeFavoriteBookThunk,
  updateCurrentPageThunk,
  getCurrentPageThunk,
} from './operations';

const initialState = {
  recommendedBooks: [],
  bookDetails: null,
  favoriteBooks: [],
  currentPage: 0,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder =>
    builder
      // Recommended Books
      .addCase(getRecommendedThunk.fulfilled, (state, { payload }) => {
        state.recommendedBooks = payload;
        state.isLoading = false;
      })
      // Book by ISBN
      .addCase(getBookByISBNThunk.fulfilled, (state, { payload }) => {
        state.bookDetails = payload;
        state.isLoading = false;
      })
      // Favorite Books
      .addCase(getFavoritesThunk.fulfilled, (state, { payload }) => {
        state.favoriteBooks = payload;
        state.isLoading = false;
      })
      // Book by ID
      .addCase(getBookByIdThunk.fulfilled, (state, { payload }) => {
        state.bookDetails = payload;
        state.isLoading = false;
      })
      // Add to Favorites
      .addCase(addFavoriteBookThunk.fulfilled, (state, { payload }) => {
        state.favoriteBooks.push(payload);
        state.isLoading = false;
      })
      // Remove from Favorites
      .addCase(removeFavoriteBookThunk.fulfilled, (state, { payload }) => {
        state.favoriteBooks = state.favoriteBooks.filter(
          book => book.id !== payload.id
        );
        state.isLoading = false;
      })
      // Update Current Page
      .addCase(updateCurrentPageThunk.fulfilled, (state, { payload }) => {
        state.currentPage = payload.page;
        state.isLoading = false;
      })
      // Get Current Page
      .addCase(getCurrentPageThunk.fulfilled, (state, { payload }) => {
        state.currentPage = payload.page;
        state.isLoading = false;
      })
      // Loading States
      .addMatcher(
        isAnyOf(
          getRecommendedThunk.pending,
          getBookByISBNThunk.pending,
          getFavoritesThunk.pending,
          getBookByIdThunk.pending,
          addFavoriteBookThunk.pending,
          removeFavoriteBookThunk.pending,
          updateCurrentPageThunk.pending,
          getCurrentPageThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      // Error States
      .addMatcher(
        isAnyOf(
          getRecommendedThunk.rejected,
          getBookByISBNThunk.rejected,
          getFavoritesThunk.rejected,
          getBookByIdThunk.rejected,
          addFavoriteBookThunk.rejected,
          removeFavoriteBookThunk.rejected,
          updateCurrentPageThunk.rejected,
          getCurrentPageThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const bookReducer = bookSlice.reducer;
