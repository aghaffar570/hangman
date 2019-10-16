import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Alphabets, GameHeader, HiddenWord, Options, GameContextProvider } from './components'
import { GameContext } from './components/GameContext';

const RestartButton = styled.button`
  position: relative;
  padding: 15px;
  font-size: 1.1rem;
  font-family: sans-serif;
  text-transform: uppercase;
  background-color: #f13b21;
  color: papayawhip;
  cursor: pointer;
  border: none;
  display: block;
  margin: 20px auto;
  z-index: 5;
`

const ImageChicks = styled.img`
  transform: scaleX(-1);
  display: block;
  margin: 2.5rem auto;
  padding: 0 60px;
`

const EndStatement = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Mansalva', cursive;
`


const App = () => {
  const { endGame, winGame, restartGame, fetchWord } = useContext(GameContext)
  return (
    <div>
      <GameHeader />
      <Alphabets />
      <HiddenWord />
      <ImageChicks src="https://www.animatedimages.org/data/media/532/animated-chicken-image-0079.gif" border="0" alt="free-animated-chicken-image-from-animatedimages.org"/>

      { endGame && winGame.size === 0 && <EndStatement>Great Job!</EndStatement> }
      { endGame && winGame.size !== 0 && <EndStatement>Sorry, try again!</EndStatement> }
      { endGame ? <RestartButton onClick={restartGame}>play again</RestartButton> : null }
      <Options fetchWord={fetchWord}/>
    </div>
  );
}

export default () => <GameContextProvider><App /></GameContextProvider>;
