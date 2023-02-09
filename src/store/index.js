import { configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "./slices/AlbumSlice";

import { userReducer } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumReducer
  }
})

export * from './thunks/fetchUser';