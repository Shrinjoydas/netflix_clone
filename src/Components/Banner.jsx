import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(fetchUrl);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchMovies();
  }, [fetchUrl]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="banner_content">
        <h1 className="title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>

        <div className="banner_buttons">
          <button className="btn">▶ Play</button>
          <button className="btn black">My List +</button>
        </div>

        <h1 className="banner_describtion">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fade--buttom" />
    </header>
  );
}

export default Banner;
