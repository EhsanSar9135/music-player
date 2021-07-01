import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
   return (
      <section className="library">
         <h2>Library</h2>
         <div className="library-songs">
            {songs.map((song) => (
               <LibrarySong key={song.id} song={song} />
            ))}
         </div>
      </section>
   );
};

export default Library;
