import React, { useEffect, useState } from "react";
import "./Style.css";
import { add_movie, add_Favorite, get_details } from "./redux-manage/Reducre";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const getArry = useSelector((state) => state.Reducer.MoviesApi);
  const getSearchMovie = useSelector((state) => state.Reducer.SearchMovie);
  const favmovie = useSelector((state) => state.Reducer.Favoritemoviesarray);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getApi = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=44a9e594&s=titanic")
      .then((res) => {
        // console.log(res.data, "res");
        dispatch(add_movie(res.data.Search));
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleAddFavorite = (item, index) => {
    const filterData = favmovie.filter((items) => {
      return items.imdbID === item.imdbID;
    });

    if (filterData.length > 0) {
      alert("Movie as Favorite already Added");
    } else {
      dispatch(add_Favorite(item));
    }
  };
  const handleGetDetails = (item, index) => {
    dispatch(get_details(item.Title));
    navigate("/details");
  };

  return (
    <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-0 sm:py-0 grid sm:py-3">
      {!getSearchMovie.length > 0
        ? getArry?.map((item, index) => {
            return (
              <div className="min-h-screen  sm:min-h-screen md:min-h-screen  bg-gray-100 flex flex-col justify-center  xl:min-h-screen xl:bg-gray-100 xl:flex   ">
                <div className="relativeborder-8 m-3 flex flex-wrap mx-auto justify-center">
                  <div className="min-w-[340px]flex flex-col  group">
                    <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                      <img
                        src={item.Poster}
                        className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                        alt=""
                      />

                      <div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                    </div>
                    <h4 className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                      {" "}
                      {item.Title}
                    </h4>

                    <p class="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
                      {item.Year}
                    </p>

                    <div className="flex justify-center gap-x-3">
                      <button
                        onClick={() => handleGetDetails(item, index)}
                        className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
                      >
                        Get Details
                      </button>
                      <button
                        onClick={() => handleAddFavorite(item, index)}
                        className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
                      >
                        {" "}
                        Add Favorite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : getSearchMovie?.map((item, index) => {
            return (
              <div className="min-h-screen  sm:min-h-screen md:min-h-screen  bg-gray-100 flex flex-col justify-center  xl:min-h-screen xl:bg-gray-100 xl:flex  ">
                <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                  <div className="min-w-[340px]flex flex-col group">
                    <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                      <img
                        src={item.Poster}
                        className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                        alt=""
                      />

                      <div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                    </div>

                    <h4 className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                      {" "}
                      {item.Title}
                    </h4>

                    <p className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
                      {item.Year}
                    </p>

                    <div className="flex justify-center gap-x-3">
                      <button
                        onClick={() => handleGetDetails(item, index)}
                        className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
                      >
                        Get Details
                      </button>
                      <button
                        onClick={() => handleAddFavorite(item, index)}
                        className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
                      >
                        {" "}
                        Add Favorite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Home;
