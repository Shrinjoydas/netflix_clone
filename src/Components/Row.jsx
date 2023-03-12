import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    };

    fetchMovies();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {movies.map((i) => (
          <img
           
            className={`poster ${isLargeRow && 'poster_large'}`}
            src={`${base_url}${isLargeRow ? i.poster_path : i.backdrop_path}`}
            alt={i.name}
            key={i.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
