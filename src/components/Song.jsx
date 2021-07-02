import React from "react";

const Song = ({ currentSong }) => {
   const { cover, name, artist } = currentSong;
   return (
      <section className="song-container">
         <img src={cover} alt={name} />
         <h2>{name}</h2>
         <h3>{artist}</h3>
      </section>
   );
};

export default Song;
