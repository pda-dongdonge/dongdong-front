import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction<{ email: string; name: string }>(
  "user/setUser"
);
export const clearUser = createAction("user/clearUser");
