import React from "react";

const LibrarySong = (props) => {
   const { song, songs, setCurrentSong, audioRef, isPlaying, setSongs } = props;
   const { cover, name, artist, active, id } = song;
   const songSelectHandler = async () => {
      await setCurrentSong(song);
      // Add active state
      const newSong = songs.map((song) => {
         if (song.id === id) {
            return {
               ...song,
               active: true,
            };
         } else {
            return {
               ...song,
               active: false,
            };
         }
      });
      await setSongs(newSong);
      // Check if the song is playing
      isPlaying && audioRef.current.play();
   };
   return (
      <section
         onClick={songSelectHandler}
         className={`library-song ${active ? "selected" : ""}`}
      >
         <img src={cover} alt={name} />
         <div className="song-description">
            <h3>{name}</h3>
            <h4>{artist}</h4>
         </div>
      </section>
   );
};

export default LibrarySong;
