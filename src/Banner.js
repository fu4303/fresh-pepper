import React, { useState, useEffect } from "react";
import "./Banner.css";
import axiosInstance from "./axios";
import requestURLs from "./requests";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState({ genre_ids: [] });
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const request = await axiosInstance.get(requestURLs.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    async function getGenres() {
      const genres = await axiosInstance.get(requestURLs.fetchGenres);

      setGenres(genres.data.genres);
      return genres;
    }

    getGenres();

    getTrending();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="banner__movie">
        <p className="banner__movie-name">
          {movie?.title || movie?.name || movie.original_name}
        </p>
        <div className="banner__movie-genres">
          {movie["genre_ids"]
            .map((genre_id) => {
              return genres.filter((genre) => {
                if (genre_id === genre.id) {
                  return genre.name;
                }
              });
            })
            .map((genre) => {
              return (
                <p key={genre[0].id} className="banner__movie-genre">
                  {genre[0].name}
                </p>
              );
            })}
        </div>
        <Link to={`/movie/${movie?.id}`} >
          <button className="banner__movie-button">Play</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
