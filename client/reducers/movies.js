// const tempInitState = [ { 
//   id: 1,
//   title: 'The Batman',
//   imdb_id: 'tt1877830',
//   watched: false,
//   img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg'
// }]


import { SAVE_ALL_MOVIES, SAVE_ONE_MOVIE } from '../actions/movies.js'


function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_ALL_MOVIES:
      return action.payload
      case SAVE_ONE_MOVIE:
        return [ ...state, action.payload]
  


    default:
      return state
  }
}

export default reducer
