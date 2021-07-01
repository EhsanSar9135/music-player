import React, { useState } from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Util
import data from "./util";

const App = () => {
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [isPlaying, setIsPlaying] = useState(false);
   return (
      <div className="App">
         <Song currentSong={currentSong} />
         <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
   );
};

export default App;
