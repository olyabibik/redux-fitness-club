import { configureStore } from '@reduxjs/toolkit';
import workouts from './workoutsSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    workouts,
    cart
  },
})