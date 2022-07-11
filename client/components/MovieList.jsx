import React from 'react'
import { useSelector } from 'react-redux'
import MovieTile from './MovieTile'

function MovieList() {

const movies = useSelector((reduxState) => {
  return reduxState.movies
})
console.log(movies)
  return (
    <>
      <h2>Movie List</h2>
      <div className='movie_container'> 
         {movies.map(movie => <MovieTile movie={movie} key={movie.id}/>)}
      </div>
    
    </>
    
  )
}

export default MovieList
