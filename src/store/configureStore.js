import { configureStore } from "@reduxjs/toolkit";

import globalInfoReducer from "../reducers/globalInfoSlice";

export const store = configureStore({
  reducer: {
    globalInfo: globalInfoReducer,
  },
});
