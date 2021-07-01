import React from "react";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";

const App = () => {
   return (
      <div className="App">
         <Song />
         <Player />
      </div>
   );
};

export default App;
