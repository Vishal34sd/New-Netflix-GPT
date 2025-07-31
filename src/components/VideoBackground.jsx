import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constant';

const VideoBackground = ({ movieId }) => {
  const [ytKey, setYtKey] = useState(null);

  const getMovieVideos = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await res.json();

    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setYtKey(trailer?.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {ytKey && (
        <iframe
          className="w-[100vw] h-[56.25vw] min-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${ytKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${ytKey}&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          
        />
      )}
    </div>
  );
};

export default VideoBackground;
