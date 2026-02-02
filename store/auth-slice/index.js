import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

// Create the auth slice
const authslice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer to set the user and update authentication status
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    // Optionally, you could add other reducers like setLoading or logOut, etc.
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

// Export the actions
export const { setUser, setLoading, logOut } = authslice.actions;

// Export the reducer
export default authslice.reducer;
