import { deleteMovies, fetchAllMovies, postTheMovie, updateMovieDetails } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const WATCHED_MOVIE = 'WATCHED_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'


function saveMovies(arr) {
  return {
    type: SAVE_ALL_MOVIES,
    payload: arr,
  }
}

export function saveOneMovie(newMovie) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: newMovie,
  }
}

export function watchedMovie(watched) {
  return {
    type: WATCHED_MOVIE,
    payload: watched,
  }
}

export function deletedMovie(deletedID) {
  return {
    type: DELETE_MOVIE,
    payload: deletedID,
  }
}



export function getAllTheMovies() {
  return (dispatch) => {
    fetchAllMovies()
      .then((movies) => {
        dispatch(saveMovies(movies))
      })

      .catch((err) => console.log(err.message))
    //then dispatch, send redux whatever we got back
  }
}

export function addMovie(movie) {
  return (dispatch) => {
    postTheMovie(movie)
      .then((movieDetails) => {
        dispatch(saveOneMovie(movieDetails))
      })
      .catch((err) => console.log(err.message))
  }
}

export function setAsWatched (id) {
return (dispatch) => {
  //api
  updateMovieDetails(id, {watched: true})
  //then
  .then((movie) => {
dispatch(watchedMovie(movie))
  })
  .catch((err)=>console.log(err.message))
  //dispatch
}

}

export function deleteMovie (id) {
  return (dispatch) => {
    //api
    deleteMovies(id)
    //then
    .then(() => {
  dispatch(deletedMovie(id))
    })
    .catch((err)=>console.log(err.message))
    //dispatch
  }
  
  }
