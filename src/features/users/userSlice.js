import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.users = state.users.filter((item) => item.id !== itemId);
    },
    editUser: (state, action) => {
      const { id, name, age, abilities } = action.payload;
      const user = state.users.find((user) => user.id == id);
      if (user) {
        user.name = name;
        user.age = age;
        user.abilities = abilities;
      }
    },
  },
});

export const { addUser, removeItem, editUser } = userSlice.actions;
export default userSlice.reducer;
