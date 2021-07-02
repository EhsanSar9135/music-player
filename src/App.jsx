import React, { useState, useRef } from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Import Util
import data from "./util";

const App = () => {
   // States
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [isPlaying, setIsPlaying] = useState(false);
   const [songTime, setSongTime] = useState({
      currentTime: 0,
      duration: 0,
   });
   // Ref
   const audioRef = useRef(0);
   // Destructing
   const { audio } = currentSong;
   // Event Handlers
   const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      setSongTime({
         ...songTime,
         currentTime,
         duration,
      });
   };
   return (
      <section className="App">
         <Song currentSong={currentSong} />
         <Player
            audioRef={audioRef}
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songTime={songTime}
            setSongTime={setSongTime}
         />
         <Library
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
         />
         <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef}
            src={audio}
         />
      </section>
   );
};

export default App;
