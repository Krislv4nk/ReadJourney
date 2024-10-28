
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
        state.token = action.payload.user.token;
        state.isLoading = false;
        state.user = action.payload.user;
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
      .addCase(signoutUser.fulfilled, () => {
       return initialState;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })

      .addCase(updateFavoritesBooksThunk.fulfilled, (state, { payload }) => {
        state.user.favoriteBooks = payload.favoritesBooks;
      })

          .addCase(refreshUser.pending, (state, action) => {
       state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
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
          state.isSignedIn = false;
        }
      ),
});

export const authReducer = authSlice.reducer;