
import { MOVIE_IMG_URL } from '../utils/constant';

const SearchMovieCard = ({ data }) => {
  const { poster_path, title } = data;
  console.log("poster_path =>", poster_path);

  const imageUrl = poster_path ? `${MOVIE_IMG_URL}${poster_path}` : null;

  return (
    <div className="w-32 h-48 text-white bg-black border border-gray-700 rounded">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded">
          No Image
        </div>
      )}
    </div>
  );
};

export default SearchMovieCard;
