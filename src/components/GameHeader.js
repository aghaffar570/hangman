import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './GameContext';


const GameTitle = styled.h1`
  margin: 2rem 0;
  font-family: 'Mansalva', cursive;
  text-transform: uppercase;
  text-align: center;
`

const ScoreBoard = styled(GameTitle)``

const Hearts = styled.span`
  color: red;
  padding-left: 6px;
`

export default () => {
  const { guessCount, userScore } = useContext(GameContext);

  const lives = new Array(guessCount)
      .fill(null, 0, guessCount).map((n, idx) => <Hearts key={idx}>&#10084;</Hearts>)

  return (
    <React.Fragment>
      <GameTitle>Hangman {lives}</GameTitle>
      <ScoreBoard>&#9968; Score: {userScore ? userScore : 0}</ScoreBoard>
    </React.Fragment>
  );
}
