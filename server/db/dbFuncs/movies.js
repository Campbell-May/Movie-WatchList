const conn = require('../connection')


function getAllMovies (db = conn) {
  return db('movies')
    .select()

}


function insertTheMovie (newMovie, db = conn) {
return db('movies')
  .insert(newMovie)

}

function getMovieById (id, db = conn) {
  return db('movies')
  .select()
    .where('id', id)
    .first()

}

module.exports = {
  getAllMovies,
  insertTheMovie,
  getMovieById
}