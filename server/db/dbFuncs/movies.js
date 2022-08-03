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

function updateMovie (id, details, db = conn) {
  return db('movies')
  .where('id', id)
  .update(details) // { watched: true }
}

function deleteMovie (id, db = conn) {
  return db('movies')
  .where('id', id)
  .delete()
}

module.exports = {
  getAllMovies,
  insertTheMovie,
  getMovieById,
  updateMovie,
  deleteMovie
}