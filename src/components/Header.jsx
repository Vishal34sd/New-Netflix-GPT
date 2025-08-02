import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchMoviesData from '../hooks/useSearchMoviesData';

const Header = ({ showSearch = true }) => {
  const searchText = useRef("");
  const navigate = useNavigate();
  const searchMovies = useSearchMoviesData(); // ✅ get function from hook

  const searchHandle = () => {
    const query = searchText.current?.value.trim();
    console.log("Searching for:", query); // ✅ DEBUG HERE

    if (!query || query.toLowerCase() === "undefined") {
      alert("Please enter a valid search term.");
      return;
    }

    searchMovies(query);   // ✅ only called with user input
    navigate("/searchPage");
  };

  return (
    <header className="absolute top-4 left-0 w-full z-20 px-6 py-4 bg-gradient-to-b from-black/70 to-transparent flex items-center">
      <div className="flex justify-between w-full">
        <img
          src="/netflix_logo-new.png"
          alt="Netflix Logo"
          className="w-56 h-auto drop-shadow-[0_0_5px_black] mr-4"
        />
        {showSearch && (
          <div>
            <input
              ref={searchText}
              type="text"
              placeholder="Search for movies, shows..."
              className="bg-white w-200 h-12 text-2xl p-3 outline-none rounded-lg"
            />
            <button
              className="w-24 h-12 bg-amber-400 text-2xl ml-3 rounded-lg"
              onClick={searchHandle}
            >
              Search
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
