import React, { useContext } from 'react';
import styled from 'styled-components';
import Options from './Options';
import { GameContext } from './GameContext';

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

const EndStatement = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Mansalva', cursive;
`

const GameFooter = () => {
  const { endGame, winGame, restartGame, fetchWord } = useContext(GameContext);
  return (
    <React.Fragment>
      { endGame && winGame.size === 0 && <EndStatement>Great Job!</EndStatement> }
      { endGame && winGame.size !== 0 && <EndStatement>Sorry, try again!</EndStatement> }
      { endGame ? <RestartButton onClick={restartGame}>play again</RestartButton> : null }
      <Options fetchWord={fetchWord}/>
    </React.Fragment>
  );
}

export default GameFooter;
