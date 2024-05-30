// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import toastReducer from "./toastPopup";
import { myMiddleware } from "./toastPopup";
import modalReducer from "./modal";
const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    middlewares.push(myMiddleware);
    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
