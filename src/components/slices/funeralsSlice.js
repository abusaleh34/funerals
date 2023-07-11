import { createSlice } from '@reduxjs/toolkit';

const funeralsSlice = createSlice({
  name: 'funeral',
  initialState: { currentUser: null },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = funeralsSlice.actions;
export default funeralsSlice.reducer;
