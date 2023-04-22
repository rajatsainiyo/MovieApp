import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./movie-library/redux-manage/Reducre";
const Store = configureStore({
  reducer: {
    Reducer: Reducer,
  },
});
export default Store;
