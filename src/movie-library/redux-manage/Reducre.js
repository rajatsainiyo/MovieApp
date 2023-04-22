import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  MoviesApi: [],
  SearchMovie: [],
  Favoritemoviesarray: [],
  getDetail: " ",
  Getdetailsitems: [],
};

const Reducer = createSlice({
  name: "movieapp",
  initialState: initialstate,
  reducers: {
    add_movie: (state, action) => {
      state.MoviesApi = [...action.payload];
    },
    Search_movies: (state, action) => {
      state.SearchMovie = [...action.payload];
    },
    add_Favorite: (state, action) => {
      state.Favoritemoviesarray = [
        ...state.Favoritemoviesarray,
        action.payload,
      ];
    },

    del_Favorite: (state, action) => {
      state.Favoritemoviesarray = action.payload;
    },
    get_details: (state, action) => {
      state.getDetail = action.payload;
    },
    get_details_item: (state, action) => {
      state.Getdetailsitems = [action.payload];
    },
  },
});
export const {
  add_movie,
  add_Favorite,
  Search_movies,
  get_details,
  get_details_item,
  del_Favorite,
  // filter_favorite
} = Reducer.actions;

export default Reducer.reducer;
