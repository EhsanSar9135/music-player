import React from "react";
import LibrarySong from "./LibrarySong";

const Library = (props) => {
   const { songs, setCurrentSong, audioRef, isPlaying, setSongs } = props;
   return (
      <section className="library">
         <h2>Library</h2>
         <div className="library-songs">
            {songs.map((song) => (
               <LibrarySong
                  key={song.id}
                  songs={songs}
                  setSongs={setSongs}
                  song={song}
                  setCurrentSong={setCurrentSong}
                  audioRef={audioRef}
                  isPlaying={isPlaying}
               />
            ))}
         </div>
      </section>
   );
};

export default Library;
