import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from '../../../../api/controllers/user.controller';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
      },
      signInSuccess: (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      },
      signInFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateUserStart: (state) => {
        state.loading = true;
      },
      updateUserSuccess: (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      },
      updateUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      signOutUserStart: (state) => {
        state.loading = true;
      },
      signOutUserSuccess: (state) => {
        state.loading = false;
        state.currentUser = null;
        state.error = null;
      },
      signOutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.pasignOut
      },
    },
});

export const { signInStart, signInSuccess, signInFail, updateUserFailure, updateUserSuccess, updateUserStart, deleteUserFailure, deleteUserSuccess, deleteUserStart, signOutUserFailure, signOutUserStart, signOutUserSuccess } = userSlice.actions;

export default userSlice.reducer;