import React, { useContext, useState } from 'react'
import { genres } from '../utils/Genres'
import { MovieContext } from '../context/MovieContext'

const Buttons = () => {
  const { filteredMovies, setFilteredMovies, setPopularMovies, popularMovies } =
    useContext(MovieContext)

  const [tabActive, setTabActive] = useState(0)
  const handleClick = id => {
    setTabActive(id)
    const movies = popularMovies.filter(item => item.genre_ids.includes(id))

    if (id === 0) setFilteredMovies(popularMovies)
    else {
      setFilteredMovies(movies)
    }
  }
  return (
    <div className='button-wrapper'>
      {genres.map(item => (
        <button
          className={tabActive === item.id ? 'active' : undefined}
          onClick={() => handleClick(item.id)}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default Buttons
