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


router.post('/', (req, res) => {
  //we did a .send so we want to get the req.body
const movie=req.body
//then we insert the movie with a db function
movieDb.insertTheMovie(movie)
//this then returns an id of the added movie
  .then((idArr) => {
const id = idArr[0]
//we use that id to look for the whole movie obj with another dbFunc
   return movieDb.getMovieById(id)
  })
  //then we create the response of the whole movie obj data
  .then((theWholeMovieObj) => {
    res.json(theWholeMovieObj)
  })
  .catch((err) => res.status(500).json({ msg: err.message}))
})

router.patch('/:id', (req, res) => {
const id = req.params.id
const detailsToUpdate = req.body

movieDb.updateMovie(id, detailsToUpdate)
  .then(() => {
   return movieDb.getMovieById(id)
  })
  .then((movie) => {
    res.json(movie)
  })
  .catch((err)=>console.log(err.message))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
 
  
  movieDb.deleteMovie(id)
    .then(() => {
     return movieDb.getMovieById(id)
    })
    .then((movie) => {
      res.json(movie)
    })
    .catch((err)=>console.log(err.message))
  })


module.exports = router
