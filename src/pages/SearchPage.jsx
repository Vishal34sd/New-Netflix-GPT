import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import SearchMovieCard from '../components/SearchMovieCard';

const SearchPage = () => {
  const searchedData = useSelector((store) => store.searchMovie.searchMoviesData ?? []);
  const filterData = searchedData.filter((item) => item.poster_path !== null);

  return (
    <div className="min-h-screen bg-black text-black">
      <Header showSearch={true} />
      <div className="p-4 flex flex-wrap justify-start gap-8 pt-24">
        <h1 className='text-white w-full mb-8'>Based on your search, we found these results</h1>
        {filterData.map((item) => (
          <SearchMovieCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
