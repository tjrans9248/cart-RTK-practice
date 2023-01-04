import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'yang';
    },
    upNumber(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, upNumber } = user.actions; // 2.

export default user;
