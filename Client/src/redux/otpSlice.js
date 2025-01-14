import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

// Retrieve token from localStorage
const token = localStorage.getItem('token');
let decoded = null;

// Decode token if valid
if (token) {
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token provided:", error.message);
    localStorage.removeItem('token'); // Clear invalid token from localStorage
  }
}

// Initial state
const initialState = {
  token: token || '',
  userId: decoded?.userId || '', // Adjust according to your token payload
};

// Create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      const { token } = action.payload;
      try {
        const decoded = jwtDecode(token);
        state.userId = decoded.userId; // Extract userId from the token
        state.token = token;
        localStorage.setItem('token', token); // Persist token in localStorage
      } catch (error) {
        console.error("Failed to decode token:", error.message);
      }
    },
    clearUserId: (state) => {
      state.userId = '';
      state.token = '';
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
});

// Export actions and reducer
export const { setUserId, clearUserId } = userSlice.actions;
export default userSlice.reducer;
