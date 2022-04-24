import { configureStore } from "@reduxjs/toolkit";
import navReduder from "./redux/slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReduder,
  },
});
