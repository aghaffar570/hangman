import React from 'react';
import styled from 'styled-components';


const GameTitle = styled.h1`
margin: 3rem 0;
font-family: 'Mansalva', cursive;
text-transform: uppercase;
text-align: center;
`

const ScoreBoard = styled(GameTitle)``

const HelpButton = styled.div`
  position: absolute;
  top: 35px;
  right: 45px;
  z-index: 100;
  cursor: pointer;
`

const Hearts = styled.span`
  color: red;
  padding-left: 6px;
`

export default ({ guessCount, userScore }) => {
  const lives = new Array(guessCount)
      .fill(null, 0, guessCount).map((n, idx) => <Hearts key={idx}>&#10084;</Hearts>)

  return (
    <React.Fragment>
      <HelpButton title="options">&#9889;</HelpButton>
      <GameTitle>Hangman {lives}</GameTitle>
      <ScoreBoard>&#9968; Score: {userScore ? userScore : 0}</ScoreBoard>
    </React.Fragment>
  );
}
