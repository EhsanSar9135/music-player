/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleRight,
   faAngleLeft,
   faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = (props) => {
   const {
      isPlaying,
      setIsPlaying,
      audioRef,
      songTime,
      setSongTime,
      songs,
      currentSong,
      setCurrentSong,
      setSongs,
   } = props;
   // UseEffect
   useEffect(() => {
      // Add active state
      const newSong = songs.map((song) => {
         if (song.id === currentSong.id) {
            return {
               ...song,
               active: true,
            };
         } else {
            return {
               ...song,
               active: false,
            };
         }
      });
      setSongs(newSong);
   }, [currentSong]);
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
   const skipTrackHandler = (direction) => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if (direction === "skip-forward") {
         setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      }
      if (direction === "skip-backward") {
         if ((currentIndex - 1) % songs.length === -1) {
            setCurrentSong(songs[songs.length - 1]);
            playAudio(isPlaying, audioRef);
            return;
         }
         setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
      playAudio(isPlaying, audioRef);
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
            <p>{duration ? getTime(duration) : "0:00"}</p>
         </div>
         <div className="player-control">
            <FontAwesomeIcon
               onClick={() => skipTrackHandler("skip-backward")}
               className="skip-backward"
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
               onClick={() => skipTrackHandler("skip-forward")}
               className="skip-forward"
               size="2x"
               icon={faAngleRight}
            />
         </div>
      </section>
   );
};

export default Player;
