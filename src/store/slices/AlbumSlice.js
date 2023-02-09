import { createSlice } from "@reduxjs/toolkit";

import { fetchAlbums } from "../thunks/fetchAlbums";

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchAlbums.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      const data = action.payload
      console.log(data)
      if (data.length > 0)
        state.data[data[0].userId] = data;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const albumReducer = albumSlice.reducer;
