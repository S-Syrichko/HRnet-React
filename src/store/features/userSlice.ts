import { createSlice } from "@reduxjs/toolkit";
import { User } from "./DataTypes";

const userSlice = createSlice({
  name: "user",
  initialState: [] as User[],
  reducers: {
    addUser: (state, action) => {
      const id = state.length;
      const newUser: User = {
        id,
        ...action.payload,
      };
      state.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
