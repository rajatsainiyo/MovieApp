import React, { useState } from "react";
// import "../Style.css";
import StarIcon from "@mui/icons-material/Star";
// import { Nav, Form, FormControl, Button, Navbar, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Search_movies } from "../redux-manage/Reducre";
import axios from "axios";

const Navbarcom = () => {
  const [inputsearchvalue, setInputsearchvalue] = useState("");
  const getArry = useSelector((state) => state.Reducer.MoviesApi);
  const getSearchMovie = useSelector((state) => state.Reducer.SearchMovie);
  const [inputdata, setInputdata] = useState("");
  const dispatch = useDispatch();
  const Nvaigate = useNavigate();

  console.log(getSearchMovie, "get");

  const getFavoriteMovies = useSelector(
    (state) => state.Reducer.Favoritemoviesarray
  );

  const getMoviesBySearch = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=44a9e594&s=${inputsearchvalue}`)
      .then((res) => {
        console.log(res.data.Search, "res");
        dispatch(Search_movies(res.data.Search));
      });
  };

  const handleOnsearch = (e) => {
    let values = e.target.value;
    setInputdata(values);

    if (values === "") {
      dispatch(Search_movies(""));
    }

    setInputsearchvalue(values);
  };

  const handleOnsubmit = () => {
    if (inputdata === "") {
      dispatch(Search_movies(""));
    } else {
      const filterData = getArry.filter((item) => {
        return item.Title.toLowerCase().includes(inputdata.toLowerCase());
      });
      dispatch(Search_movies(filterData));
    }
    setInputsearchvalue(inputdata);
    getMoviesBySearch();
    Nvaigate("/home");
  };

  return (
    <div className="">
      <nav className="bg-gray-600  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink
                className="nav-link text-white font-bold text-xl"
                to="/home"
              >
                Home
              </NavLink>
              {/* <a href="/" className="text-white font-bold text-xl">Home</a> */}
            </div>
            <div className="flex-grow flex-shrink mx-4 sm:mx-0">
              {/* <form action="/" method="GET"> */}
              <div className=" flex items-center bg-white rounded-full shadow-xl ">
                <input
                  onChange={handleOnsearch}
                  value={inputsearchvalue}
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 rounded-full focus:outline-none"
                />
                <button
                  onClick={handleOnsubmit}
                  type="submit"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 focus:outline-none"
                >
                  Search
                </button>
              </div>
              {/* </form> */}
            </div>
            <div className="flex-shrink-0">
              <NavLink
                className="nav-link text-white font-bold text-xl"
                to="/favorite"
              >
                {" "}
                <StarIcon /> Favorite {getFavoriteMovies.length}
              </NavLink>
              {/* <a href="/about" className="text-white font-bold text-xl">About</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarcom;
