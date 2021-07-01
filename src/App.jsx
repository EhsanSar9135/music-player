import React, { useState } from "react";
// Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Import Util
import data from "./util";

const App = () => {
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [isPlaying, setIsPlaying] = useState(false);
   return (
      <section className="App">
         <Song currentSong={currentSong} />
         <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
         />
         <Library songs={songs} />
      </section>
   );
};

export default App;
