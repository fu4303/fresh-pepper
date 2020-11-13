import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./Movie.css";
import StarIcon from "@material-ui/icons/Star";
import axiosInstance from "./axios";

function Movie({ match }) {
  const fetchMovie = `/movie/${match.params.id}?api_key=48504c42f2d14bb38eb91a372826d53d&language=en-US&append_to_response=videos`;

  const [movie, setMovie] = useState({
    genres: [],
    videos: { results: [{ key: "" }] },
  });

  const [trailer, setTrailer] = useState(false);

  const hideTrailer = () => {
    return setTrailer(!trailer);
  };

  useEffect(() => {
    async function getMovie() {
      const request = await axiosInstance.get(fetchMovie);
      console.log(request.data.videos.results[0].key);
      setMovie(request.data);

      return request;
    }

    getMovie();
  }, [fetchMovie]);

  return (
    <div
      className="movie"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.poster_path}"
        )`,
        backgroundPosition: "center center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
      }}
    >
      <div className="movie__details">
        <div style={{
            display: trailer ? "none" : "block",
        }}>
          <div className="movie__metadata">
            <StarIcon className="movie__metadata-icon" />
            <p className="movie__metadata-option">{movie?.vote_average}/10</p>
            <p className="movie__metadata-option"> | </p>
            <p className="movie__metadata-option">{movie?.runtime}mins</p>
            <p className="movie__metadata-option"> | </p>
            <p className="movie__metadata-option">{movie?.release_date}</p>
          </div>
          <div className="movie__title">
            {movie?.title || movie?.name || movie.original_name}
          </div>
          <div className="movie__genres">
            {movie["genres"].map((movie_genre) => (
              <p key={movie_genre.id} className="movie__genre">
                {movie_genre.name}
              </p>
            ))}
          </div>
          <div className="movie__overview">{movie?.overview}</div>
        </div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
          width="100%"
          style={{
            boxSizing: "border-box",
            display: trailer ? "block" : "none",
          }}
        />
      </div>
      <div className="movie__buttons">
        <button onClick={hideTrailer} className={trailer ? "movie__button-list" : "movie__button-play" }>
          {trailer ? "View details" : "Play"}
        </button>
      </div>
    </div>
  );
}

export default Movie;
