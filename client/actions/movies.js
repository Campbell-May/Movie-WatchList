import { fetchAllMovies } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'

function saveMovies (arr) {
return {

  type: SAVE_ALL_MOVIES,
  payload: arr
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
