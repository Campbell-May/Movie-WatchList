import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MovieList from './MovieList'
import AddForm from './AddForm'
import Nav from './Nav'

import {getAllTheMovies} from '../actions/movies'
import { Route, Routes } from 'react-router-dom'

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
        
    <Nav />

        <Routes>
        <Route path='/' element={<MovieList />} />

          <Route path='/add' element={<AddForm />} />
        </Routes>
      </section>
    </>
  )
}

export default App
