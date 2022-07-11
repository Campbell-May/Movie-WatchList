const conn = require('../connection')


function getAllMovies (db = conn) {
  return db('movies')
    .select()

}

module.exports = {
  getAllMovies
}