const express = require('express')
const router = express.Router()

const movieDb = require('../db/dbFuncs/movies')


router.get('/', (req, res) => {
  movieDb.getAllMovies()
    .then((allTheMovies) => {
res.json(allTheMovies)
    })
    .catch((err) => res.status(500).json({ msg: err.message}))
})



module.exports = router
