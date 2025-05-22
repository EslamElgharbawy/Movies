import React, { useState } from 'react'
import { useEffect } from 'react';
import TrandingMovieCard from '../TrandingMovieCard/TrandingMovieCard';

export default function TrendingMovie() {
  let [trandingMovie, settrandingMovie] = useState([])
  function getTrandingMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4YTY2ZTFlNzhmNjY5ZDM2NjllMmFkZTY4MmQ5OSIsIm5iZiI6MTc0MTYzOTk3MC41OTcsInN1YiI6IjY3Y2Y1MTIyZmYxYTg0MGI5OTExMzVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R5pkkGLsuQabUWyre1HBOVg_vER4QttJ9qxxjOQl3Y'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(res => res.json())
      .then(res => {
        settrandingMovie(res.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getTrandingMovies()
  }, [])

  return <>
    <div className='container grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 '>
      {trandingMovie.map(movie => (
        <TrandingMovieCard key={movie.id} movie={movie} />
      ))}
    </div>



  </>
}