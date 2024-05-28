// src/store/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./store";
interface UserState {
  email: string | null;
  username: string | null;
}

const initialState: UserState = {
  email: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
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
