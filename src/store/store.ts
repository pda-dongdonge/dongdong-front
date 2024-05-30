// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import toastReducer from "./toastPopup";
import {myMiddleware} from './toastPopup'




const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware)=>{
    const middlewares = getDefaultMiddleware();
    middlewares.push(myMiddleware)
    return middlewares
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
