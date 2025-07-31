import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className = "p-36 px-15 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className = "py-6 text-lg w-2/4">{overview}</p>
      <div>
        <button className='bg-gray-500 p-4 text-white px-16 text-xl bg-opacit-50 rounded-lg'>Play Now</button>
        <button className='bg-gray-500 p-4 ml-4 text-white px-16 text-xl bg-opacit-50 rounded-lg'>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
