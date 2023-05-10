import * as React from 'react';
import { AudioPlayer } from './AudioPlayer';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>React Audio Player 1</h1>
      <AudioPlayer src="https://sounds.pond5.com/johann-sebastian-bach-bourree-lute-music-122462762_nw_prev.m4a" />
      <h1>React Audio Player 2</h1>
      <AudioPlayer src="https://sounds.pond5.com/mystical-celts-music-134675327_nw_prev.m4a" />
    </div>
  );
}
