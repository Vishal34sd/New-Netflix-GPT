import React from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useEffect , useState} from 'react'
const VideoBackground = ({ movieId }) => {

  const [ytKey , setYtKey] = useState(null);

  const getMovieVideos = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await res.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setYtKey(trailer?.key);
  }

  useEffect(() => {
    getMovieVideos()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 m-0 p-0">
      <iframe
        className="w-screen h-screen object-cover"
        src={`https://www.youtube.com/embed/${ytKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${ytKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      ></iframe>
      
    
    </div>
  )
}

export default VideoBackground
