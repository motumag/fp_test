import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
  //   reduces some error in redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
