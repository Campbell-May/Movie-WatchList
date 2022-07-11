import React from "react";

function MovieTile (props) {
const movie = props.movie

function deleteMovie ()  {



}




  return (
    <div className='movie_tile' >
    <img src={movie.img} alt='movieimage'></img>
      <h3 >{movie.title}</h3>
      <button onClick={deleteMovie(movie.id)}>Delete</button>
      </div>

  )
}

export default MovieTile