import React from 'react';
import { Player } from 'video-react';

function  Video (props) {
  return (
    <Player
      playsInline
      // poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" //Reemplazar por la ruta del video correcto
    />
  );
};
export default Video;