import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleRight,
   faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
   // States
   const [songTime, setSongTime] = useState({
      currentTime: null,
      duration: null,
   });
   // Destructuring
   const { audio } = currentSong;
   const { currentTime, duration } = songTime;
   // Ref
   const audioRef = useRef(null);
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
   const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      setSongTime({
         ...songTime,
         currentTime,
         duration,
      });
   };
   const getTime = (time) => {
      return (
         Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
   };
   return (
      <div className="player">
         <div className="time-control">
            <p>{getTime(currentTime)}</p>
            <input type="range" />
            <p>{getTime(duration)}</p>
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
         <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef}
            src={audio}
         />
      </div>
   );
};

export default Player;
