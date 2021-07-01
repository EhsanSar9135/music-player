import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleRight,
   faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
   // Ref
   const audioRef = useRef(null);
   // Destructuring
   const { audio } = currentSong;
   // Event Handlers
   const playSongHandler = () => {
      if (isPlaying) {
         audioRef.current.pause();
         setIsPlaying(!isPlaying);
      } else {
         audioRef.current.play();
         setIsPlaying(!isPlaying);
      }
   };
   return (
      <div className="player">
         <div className="time-control">
            <p>Start Time</p>
            <input type="range" />
            <p>End Time</p>
         </div>
         <div className="player-control">
            <FontAwesomeIcon
               className="skip-backwards"
               size="2x"
               icon={faAngleLeft}
            />
            <FontAwesomeIcon
               onClick={playSongHandler}
               className="play"
               size="2x"
               icon={faPlay}
            />
            <FontAwesomeIcon
               className="skip-forwards"
               size="2x"
               icon={faAngleRight}
            />
         </div>
         <audio ref={audioRef} src={audio} />
      </div>
   );
};

export default Player;
