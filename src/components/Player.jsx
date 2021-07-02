import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleRight,
   faAngleLeft,
   faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
   const { isPlaying, setIsPlaying, audioRef, songTime, setSongTime } = props;

   // Destructuring
   const { currentTime, duration } = songTime;
   const { current } = audioRef;
   // Event Handlers
   const playSongHandler = () => {
      if (isPlaying) {
         current.pause();
         setIsPlaying(!isPlaying);
      } else {
         current.play();
         setIsPlaying(!isPlaying);
      }
   };

   const getTime = (time) => {
      return (
         Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
   };
   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;
      setSongTime({
         ...songTime,
         currentTime: e.target.value,
      });
   };
   return (
      <section className="player">
         <div className="time-control">
            <p>{getTime(currentTime)}</p>
            <input
               onChange={dragHandler}
               min={0}
               max={duration || 0}
               value={currentTime}
               type="range"
            />
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
               icon={isPlaying ? faPause : faPlay}
            />
            <FontAwesomeIcon
               className="skip-forwards"
               size="2x"
               icon={faAngleRight}
            />
         </div>
      </section>
   );
};

export default Player;
