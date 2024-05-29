// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import toastReducer from "./toastPopup";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
