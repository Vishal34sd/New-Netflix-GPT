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
      <div className="p-4 flex flex-wrap justify-start gap-8 pt-32 pl-18">
        <h1 className='text-white w-full mt-12 text-3xl'>Based on your search, we found these results</h1>
        {searchedData.length === 0 ? (
          <div className='text-yellow-300 text-2xl pt-16 '>No result found !!!</div>
        ) : (
          filterData.map((item) => (
            <SearchMovieCard key={item.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
