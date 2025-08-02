import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import SearchMovieCard from '../components/SearchMovieCard'

const SearchPage = () => {
    const searchedData = useSelector((store)=>store.searchMovie.searchMoviesData?? []);
    const filterData = searchedData.filter((item)=>item.poster_path!==null);

  return (
    <div className=' h-screen flex bg-black px-150 py-80' >
      <Header showSearch={true}/>
      {filterData?.map((item) => (
        <SearchMovieCard key={item.id} data={item} />
      ))}
    </div>
  )
}

export default SearchPage
