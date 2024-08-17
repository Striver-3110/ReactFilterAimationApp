import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { motion } from 'framer-motion'

const Movies = () => {
  const { filteredMovies } = useContext(MovieContext)
//   console.log(JSON.stringify(filteredMovies))
  // console.table("movies at movies component"+popularMovies)
  // popularMovies.forEach((movie)=>console.log("movie"+movie))
  return filteredMovies && filteredMovies.map(movie => (
    //? key in motion.component is must else will not work properly
    <motion.div className='image-card' key={movie.id}
    layout
    initial={{opacity: 0}}
    animate={{duration: 0.5, opacity: 1}}
    exit={{opacity: 0}}
    >
      <motion.img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt={movie.original_title}
      />
      <motion.h2>{movie.title}</motion.h2>
    </motion.div>
  ))
}

export default Movies
