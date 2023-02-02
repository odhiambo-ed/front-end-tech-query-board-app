import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counter/counterSlice';
import questionsReducer from '../slice/questionsSlice';
import usersReducer from '../slice/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionsReducer,
    users: usersReducer
  },
});
