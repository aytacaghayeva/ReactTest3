import { createSlice } from '@reduxjs/toolkit';

let moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
    updateMovie: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export let  { addMovie, deleteMovie, updateMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
