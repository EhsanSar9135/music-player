import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
   const { cover, name, artist } = song;
   const songSelectHandler = () => {
      setCurrentSong(song);
      if (isPlaying) {
         const playPromise = audioRef.current.play();
         playPromise &&
            playPromise.then((audio) => {
               audioRef.current.play();
            });
      }
   };
   return (
      <section onClick={songSelectHandler} className="library-song">
         <img src={cover} alt={name} />
         <div className="song-description">
            <h3>{name}</h3>
            <h4>{artist}</h4>
         </div>
      </section>
   );
};

export default LibrarySong;
