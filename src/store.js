import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/slices/userSlice';
import mosqueReducer from './slices/mosqueSlice';
import funeralReducer from './slices/funeralSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    mosque: mosqueReducer,
    funeral: funeralReducer
  },
});
