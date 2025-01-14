import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import otpReducer from './otpSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    UserId : otpReducer
  },
});

export default store;
