import React from 'react'

import video from '../videos/flame.mp4'
import '../scss/video.scss'

const Video = () => {
  return (
    <section>
      <video width="1920" height="1080" preload="true" autoPlay loop>
        <source src={video} type="video/mp4"/>
       </video>
    </section>
  );
}

export default Video
