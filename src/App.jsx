import { useContext, useEffect, useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Movies from './components/Movies'
import { MovieContext } from './context/MovieContext'
import { AnimatePresence } from 'framer-motion'

function App () {
  const {popularMovies,setFilteredMovies, setPopularMovies} = useContext(MovieContext)

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`

  const getPopularMovies = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log('response from popular movies')
      // console.log(data.results)
      if (Array.isArray(data.results)) {
        setPopularMovies(data.results)
        //? NOTE:
        //! remember that setFilteredMovies(popularMovies) might not work properly bcz state update is an async operation in react instead use
        setFilteredMovies(data.results)
      } else {
        console.log('data is not array type')
        console.log(data.results)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <div className='app'>
      <Buttons />
      <div className='image-container'>
        <AnimatePresence>
        <Movies/>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
