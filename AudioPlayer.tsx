import * as React from 'react';
import { useRef, useState } from 'react';

type AudioPlayerProps = {
  src: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const increaseVolume = () => {
    const newVolume = Math.min(volume + 0.1, 1);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const decreaseVolume = () => {
    const newVolume = Math.max(volume - 0.1, 0);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <div>
        <button onClick={decreaseVolume}>-</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={increaseVolume}>+</button>
      </div>
    </div>
  );
};
