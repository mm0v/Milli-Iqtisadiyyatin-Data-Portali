import React from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
}) => {
  return (
    <div className={`w-full h-full inset-0 -z-10`}>

      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-[rgba(29,4,22,0.7)]" />
      </div>

    </div>
  );
};

export default BackgroundVideo;

// import React from 'react';

// interface BackgroundVideoProps {
//   videoSrc: string;
// }

// const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc }) => {
//   return (
//     <div className="relative w-full h-full">
//       {/* Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover -z-10 absolute top-0 left-0"
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>

//       {/* Overlay */}
//      <div className="absolute inset-0 w-full h-full bg-[rgba(29,4,22,0.6)]" />

//     </div>
//   );
// };

// export default BackgroundVideo;
