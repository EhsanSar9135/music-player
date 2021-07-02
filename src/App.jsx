import React, { useState, useRef } from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import Util
import data from "./data";

const App = () => {
   // States
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [isPlaying, setIsPlaying] = useState(false);
   const [songTime, setSongTime] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
   });
   const [libraryStatus, setLibraryStatus] = useState(false);
   // Ref
   const audioRef = useRef(0);
   // Event Handlers
   const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      // Calculate Percentage
      const roundedCurrent = Math.round(currentTime);
      const roundedDuration = Math.round(duration);
      const animationPercentage = Math.round(
         (roundedCurrent / roundedDuration) * 100
      );
      setSongTime({
         ...songTime,
         currentTime,
         duration,
         animationPercentage,
      });
   };
   return (
      <section className="App">
         <Nav
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
         />
         <Song currentSong={currentSong} />
         <Player
            audioRef={audioRef}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songTime={songTime}
            setSongTime={setSongTime}
            songs={songs}
            setSongs={setSongs}
         />
         <Library
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            libraryStatus={libraryStatus}
         />
         <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
         />
      </section>
   );
};

export default App;
