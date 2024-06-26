// src/store/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  _id: string | null;
  email: string | null;
  phone: number | null;
  username: string | null;
}

const initialState: UserState = {
  _id: null,
  email: null,
  phone: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      (state._id = action.payload._id),
        (state.phone = action.payload.phone),
        (state.email = action.payload.email),
        (state.username = action.payload.username);
    },
    clearUser: (state) => {
      (state.email = null), (state.username = null);
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
