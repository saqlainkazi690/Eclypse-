import React from 'react';
import eclypseVideo from '../assets/videos/eclypse.mp4';

const VideoBackground: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={eclypseVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;