import React from "react";
import {useDispatch} from 'react-redux'
import { setAsWatched, deleteMovie} from '../actions/movies.js'

function MovieTile (props) {
const movie = props.movie
const dispatch = useDispatch()



function deleteMovieButton ()  {
  console.log('deeeelete', movie.id)
  dispatch(deleteMovie(movie.id))



}

const watchedMovie = () => {
  console.log('cliiiick', movie.id)
  dispatch(setAsWatched(movie.id))
}
  





  return (
    <div className='movie_tile' >
    <img src={movie.img} alt='movieimage'></img>
      <h3 >{movie.title}</h3>
      <button onClick={() => deleteMovieButton(movie.id)}>Delete</button>
     {!movie.watched && <button onClick={() => watchedMovie(movie.id)}>Watched</button>}


      </div>

  )
}

export default MovieTile