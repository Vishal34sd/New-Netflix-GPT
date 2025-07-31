import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-start px-16 text-white bg-gradient-to-r from-black/90 via-black/60 to-transparent">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg max-w-2xl">{overview}</p>
      <div>
        <button className='bg-white p-4 text-black px-16 text-xl bg-opacity-50 rounded-lg'>Play Now</button>
        <button className='bg-gray-500 p-4 ml-4 text-white px-16 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
