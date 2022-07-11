import React, { useState } from 'react'
import { searchForMovie } from '../apis/imdb'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions/movies'


function AddForm() {
  const [newMovie, setNewMovie] = useState('')
  const [results, setResults] = useState([])


  const dispatch = useDispatch()


  const handleTyping = (evt) => {
    setNewMovie(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchForMovie(newMovie)
      .then((arr) => {
        setResults(arr)
      })
      .catch((err) => console.log(err.message))
  }

  const handleAdd = (movie) => {
dispatch(addMovie(movie))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        {process.env.MOVIE_KEY}

        <label>
          Search:
          <input
            onChange={handleTyping}
            name="search"
            value={newMovie}
            type="text"
          />
        </label>
        <button>Done!</button>
      </form>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            {movie.title} {movie.description}
            <button onClick={() => handleAdd(movie)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AddForm
