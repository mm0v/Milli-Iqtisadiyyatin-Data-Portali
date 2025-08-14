import React from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  videoSrc, 
}) => {
  return (
    <div className={`w-full h-full inset-0 -z-10`}>
        
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
    </div>
  );
};

export default BackgroundVideo;