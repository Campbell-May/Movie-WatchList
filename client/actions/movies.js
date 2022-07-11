import { fetchAllMovies, postTheMovie } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

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
