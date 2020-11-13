import React, { useState, useEffect } from "react";
import "./Row.css";
import axiosInstance from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <div className="row__title">{title}</div>
      <div className="row__movies">
        {movies.map((movie) => {
          return (
              <img
                alt={movie?.title || movie?.name || movie?.original_name}
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                className="row__movie"
              />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
