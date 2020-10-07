// import React from "react";

// export default ({ videoId }) => {
//   if (!videoId) {
//     return (
//       <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
//         Search for a video
//       </p>
//     );
//   }
//   return (
//     <div className="video-player">
//       <iframe
//         title={videoId}
//         className="video-iframe"
//         src={`https://www.youtube.com/embed/${videoId}`}
//       />
//     </div>
//   );
// };


import React from 'react';
// import YouTube from 'react-youtube';
 
// export default (props) => {
//     const _onReady = (event) => {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//       }

//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };
 
//     return <YouTube videoId={props} opts={opts} onReady={_onReady} />;
//   }

// import HoverVideoPlayer from 'react-hover-video-player';
 
// export default () => {
//   return (
//     <HoverVideoPlayer
     
//       pausedOverlay={
//         <img src="thumbnail-image.jpg" alt="" />
//       }
//       loadingOverlay={
//         <div className="loading-spinner-overlay" />
//       }
//     />
//   );
// }


// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
 
// export default (props) => {
//     console.log(props.myID)
//   (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.myID}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//   </Popup>
// );
//   }

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default Videoplayer;
 
  
