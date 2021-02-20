import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listproductReducer from '../features/listproduct/listproductSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    listproduct: listproductReducer
  },
});
