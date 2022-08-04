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
    <div className='watchList'>
      <h2>My WatchList</h2>
    </div>
      
      <div className='movie_container'> 
         {movies.map(movie => <MovieTile movie={movie} key={movie.id}/>)}
      </div>
    
    </>
    
  )
}

export default MovieList
