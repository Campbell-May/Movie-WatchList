import React, { useState } from 'react'
import { searchForMovie } from '../apis/imdb'

function AddForm() {
  const [newMovie, setNewMovie] = useState('')
  const [results, setResults] = useState([])

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
          <li key={movie.title}>
            {movie.title} {movie.description}{' '}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AddForm
