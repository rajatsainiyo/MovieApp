import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { del_Favorite } from "../redux-manage/Reducre";

const Favorite = () => {
  
  const dispatch = useDispatch();
  const getFavoriteMovies = useSelector(
    (state) => state.Reducer.Favoritemoviesarray
  );

  const handleRemoveFavorite = (item, index) => {
    let filtredData = getFavoriteMovies.filter((items) => {
      return items !== item;
    });

    dispatch(del_Favorite(filtredData));
  };
  return (
    < div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-0 sm:py-0 grid sm:py-3 ">
      {getFavoriteMovies?.map((item,index)=>{
        return(

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
                        onClick={() => handleRemoveFavorite(item, index)}
                        className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
                      >
                       Remove To Favorite
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
        )
      })
      }




      {/* <div className="fluid-container">
        <div className="row mt-4 m-0">
          {getFavoriteMovies?.map((item, index) => {
            return (
              <div className="col-lg-4  ">
                <div className="card text-center ">
                  <img
                    src={item.Poster}
                    className="card-img-top "
                    style={{
                      border: "3px solid black",
                      height: "350px",
                      width: "250",
                    }}
                    alt="Movie.jpg"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Year}</p>
                    <button
                      onClick={() => handleRemoveFavorite(item, index)}
                      className="btn btn-primary"
                    >
                      {" "}
                      Remove to Favorite
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Favorite;
