import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import SearchMovieCard from '../components/SearchMovieCard'

const SearchPage = () => {
    const searchedData = useSelector((store)=>store.searchMovie.searchMoviesData);

  return (
    <div className=' h-screen' >
      <Header showSearch={true}/>
      {searchedData?.map((item) => (
        <SearchMovieCard key={item.id} data={item} />
      ))}
    </div>
  )
}

export default SearchPage
