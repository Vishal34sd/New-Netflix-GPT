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
      <div className="p-4 flex flex-wrap justify-center gap-4">
        <h1 className='text-white'>Based on your search , we found these results</h1>
        {filterData.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 mt-56">
            <SearchMovieCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
