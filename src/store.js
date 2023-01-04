import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    increaseNumber(state, action) {
      let number = state.findIndex(a => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
  },
  addItem(state, action) {
    state.push(action.payload);
  },
  removeItem(state, action) {
    let a = state.filter(data => {
      return data.id !== action.payload;
    });
    return a;
  },
});

export let { increaseNumber, removeItem, addItem } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
