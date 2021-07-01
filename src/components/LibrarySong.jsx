import React from "react";

const LibrarySong = ({ song }) => {
   const { cover, name, artist } = song;
   return (
      <section className="library-song">
         <img src={cover} alt={name} />
         <div className="song-description">
            <h3>{name}</h3>
            <h4>{artist}</h4>
         </div>
      </section>
   );
};

export default LibrarySong;
