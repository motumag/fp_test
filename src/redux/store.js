import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
export const store = configureStore({
  reducer: { user: userReducer },
  //   reduces some error in redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
