import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MovieList from './MovieList'

import {getAllTheMovies} from '../actions/movies'

function App () {

  const dispatch = useDispatch()

useEffect(() => {
dispatch(getAllTheMovies())
}, [])

  return (
    <>
      <header className="header">
        <h1>Movies</h1>
      </header>
      <section className="main">
        <MovieList />
      </section>
    </>
  )
}

export default App
