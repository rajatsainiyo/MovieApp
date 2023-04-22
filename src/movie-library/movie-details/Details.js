import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { get_details_item } from "../redux-manage/Reducre";

const Details = () => {
  const dispatch = useDispatch();

  const getDetailData = useSelector((state) => state.Reducer.getDetail);
  const getDetailitems = useSelector((state) => state.Reducer.Getdetailsitems);

  const getDetails = async () => {
    await axios
      .get(`https://www.omdbapi.com/?apikey=44a9e594&t=${getDetailData}`)
      .then((res) => {
        // console.log(res.data, "data");

        dispatch(get_details_item(res.data));
      });
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="min-h-screen justify-center">
      {getDetailitems?.map((items, index) => {
        return (
          <div className="min-h-screen  sm:min-h-screen md:min-h-screen  bg-gray-100 flex flex-col justify-center  xl:min-h-screen xl:bg-gray-100 xl:flex   ">
            <div className="relativeborder-8 m-3 flex flex-wrap mx-auto justify-center">
              <div className="min-w-[340px]flex flex-col  group">
                <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                  <img
                    src={items.Poster}
                    className=" w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                    alt=""
                  />

                  <div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                </div>
                <h4 className="font-mono block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                  {" "}
                  {items.Title}
                </h4>

                <p class=" font-mono mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
                  Year: {items.Year}
                </p>

                <div className="justify-center flex gap-x-3 mt-3 ">
                  <ul>
                    <li className=" flex">
                      <label className="font-bold  text-xl">Rating :</label>

                      {Object.entries(items).map(([keys, values]) => {
                        return (
                          <>
                            {Object.entries(values).map(
                              ([keys_2, values_2]) => {
                                console.log(values_2, "rating");
                                return (
                                  <h2 className="font-mono mt-2 ">
                                    {values_2.Value}
                                  </h2>
                                );
                              }
                            )}
                          </>
                        );
                      })}
                    </li>

                    <li className="">
                      {" "}
                      <label className="font-bold  text-xl"> Plot:</label>{" "}
                      {items.Plot}
                    </li>
                    <li>
                      {" "}
                      <label className="font-bold  text-xl">Cast: </label>{" "}
                      {items.Actors}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
