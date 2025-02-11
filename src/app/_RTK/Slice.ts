import { configureStore } from "@reduxjs/toolkit";
import weather from "./DataSlice";
import city from "./City";

const store = configureStore({
  reducer: {
    weather,
    city,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
