import React from 'react';
import {
  Alphabets,
  GameHeader,
  HiddenWord,
  ImageChick,
  GameContextProvider,
  GameFooter } from './components'

const App = () => {
  return (
    <GameContextProvider>
      <GameHeader />
      <Alphabets />
      <HiddenWord />
      <ImageChick />
      <GameFooter />
    </GameContextProvider>
  );
}

export default App;
