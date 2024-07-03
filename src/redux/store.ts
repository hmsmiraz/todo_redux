import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    // [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducer,
  },
  // middleware: (buildGetDefaultMiddleware) =>
  //   buildGetDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
