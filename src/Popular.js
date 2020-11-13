import React, { useState, useEffect } from "react";
import "./Popular.css";
import axiosInstance from "./axios";
import { Link } from "react-router-dom";

function Popular({title, fetchURL}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axiosInstance.get(fetchURL);
      setMovies(request.data.results);
      // console.log(request.data.results)
      return request;
    }

    fetchMovies();
  }, []);

  return (
    <div className="section">
      <p className="section__header">{title}</p>
      {movies.map((movie) => {
        return (
          <Link className="section__item" to={`/movie/${movie?.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="section__image"
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Popular;
