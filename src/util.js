export const playAudio = (isPlaying, audioRef) => {
   if (isPlaying) {
      const playPromise = audioRef.current.play();
      playPromise &&
         playPromise.then((audio) => {
            audioRef.current.play();
         });
   }
};
