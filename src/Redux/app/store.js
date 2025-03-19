import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../features/User/UserSlice.js";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});


