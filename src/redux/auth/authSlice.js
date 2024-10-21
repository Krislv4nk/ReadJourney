
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signupUser,
  signinUser,
  signoutUser,
  refreshUser,
  updateUserInfo,
 updateFavoritesBooksThunk,
} from './operations';

const initialState = {
  token: null,
  user: {
    email: '',
    username: '',
    favoriteBooks: null,
  },
  isRefreshing: false,
  isLoading: false,
  isSignedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.token = action.payload.newUser.token;
        state.isLoading = false;
        state.user = action.payload.newUser;
        state.isSignedIn = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(signoutUser.fulfilled, state => {
        state.token = null;
        state.user = initialState;
        state.isSignedIn = false;
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })

      .addCase(updateFavoritesBooksThunk.fulfilled, (state, { payload }) => {
        state.user.FavoritesBooks = payload.FavoritesBooks;
      })

          .addCase(refreshUser.pending, (state, action) => {
          state.user = action.payload.user;
        state.isRefreshing = true;
      })
      

      .addMatcher(
        isAnyOf(
          signupUser.pending,
          signinUser.pending,
          signoutUser.pending,
        
          updateUserInfo.pending,
          updateFavoritesBooksThunk.pending
          // updateUserInfoThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signupUser.rejected,
          signinUser.rejected,
          refreshUser.rejected,
          signoutUser.rejected,
          updateUserInfo.rejected,
          updateFavoritesBooksThunk.rejected
          // updateUserInfoThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.isRefreshing = false;
        }
      ),
});

export const authReducer = authSlice.reducer;