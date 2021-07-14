import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import articleReducer from '../features/article/articleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    article: articleReducer
  },
});
