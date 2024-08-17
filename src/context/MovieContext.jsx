import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MovieContext = createContext()
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const value = {
    popularMovies,
    setPopularMovies,
    filteredMovies,
    setFilteredMovies
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

export default MovieProvider
