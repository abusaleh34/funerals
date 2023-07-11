import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creator
export const fetchMosques = createAsyncThunk(
  'mosques/fetchMosques',
  async () => {
    const response = await axios.get('http://localhost:3000/api/mosques');
    return response.data;
  }
);

const mosquesSlice = createSlice({
  name: 'mosque',
  initialState: { currentUser: null, mosques: [] },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMosques.fulfilled, (state, action) => {
      // Add mosques to state
      state.mosques = action.payload;
    });
  }
});

export const { login, logout } = mosquesSlice.actions;
export default mosquesSlice.reducer;

