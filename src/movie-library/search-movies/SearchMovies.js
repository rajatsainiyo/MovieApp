import React from "react";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  const getFavoriteMovies = useSelector((state) => state.Reducer.SearchMovie);

  return (
    <>
      <div className="fluid-container">
        <div className="row">
          <div className="col-lg-12">
            <Navbar />
          </div>
        </div>

        <div className="row mt-4">
          {getFavoriteMovies?.map((item) => {
            return (
              <div className="col-lg-4 ">
                <div className="card text-center ">
                  <img
                    src={item.Poster}
                    className="card-img-top "
                    style={{
                      border: "2px solid red",
                      height: "350px",
                      width: "250",
                    }}
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Year}</p>
                    <a href="#" className="btn btn-primary">
                      Add to Favorite
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchMovies;
