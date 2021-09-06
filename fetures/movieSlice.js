import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: null,
  },
  reducers: {
    setMovieData(state, action) {
      state.movieData = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
