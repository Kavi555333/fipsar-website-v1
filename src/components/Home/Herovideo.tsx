// import React from 'react'
import herovideo from '../../assets/DNavieo.mp4'


const Herovideo = () => {
  return (
  <div className="w-full h-screen overflow-hidden mt-12">
      <video
        className="w-full h-full object-cover"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default Herovideo
