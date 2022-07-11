import React from "react";

function MovieTile (props) {
const movie = props.movie
  return (
    <div className='movie_tile' >
    <img src={movie.img} alt='movieimage'></img>
      <h3 >{movie.title}</h3>
      </div>

  )
}

export default MovieTile