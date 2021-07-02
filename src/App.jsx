import React, { useState, useRef } from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
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
   const [libraryStatus, setLibraryStatus] = useState(false);
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
         <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
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
            src={audio}
         />
      </section>
   );
};

export default App;
