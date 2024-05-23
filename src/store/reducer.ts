// src/store/reducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { setUser, clearUser } from "./actions";

interface UserState {
  email: string | null;
  name: string | null;
}

const initialState: UserState = {
  email: null,
  name: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    })
    .addCase(clearUser, (state) => {
      state.email = null;
      state.name = null;
    });
});

export default userReducer;
