import request from "superagent";

export function fetchAllMovies () {
return request.get('/api/v1/movies')
  .then(resp => resp.body)
}

export function postTheMovie (messyMovie) {
  const tidyMovie = {
    title: messyMovie.title,
    imdb_id: messyMovie.id,
    img: messyMovie.image
  }

return request.post('/api/v1/movies')
.send(tidyMovie)
//this is what returns from the db
.then(resp => resp.body)
}


export function updateMovieDetails (id, details) {
//PATCH
return request.patch('/api/v1/movies/' + id)
//send Details
.send(details)
.then(resp => resp.body)

}

export function deleteMovies (id) {
  //PATCH
  return request.delete('/api/v1/movies/' + id)
  //send Details
  .then((resp) => resp)
  
  }
