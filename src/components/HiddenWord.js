import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './GameContext';

const HiddenWord = styled.div`
  padding: 4rem 1.5rem 3rem;
  text-align: center;
`

const HiddenLetter = styled.span`
  margin: 0 25px;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 400;
  font-family: sans-serif;
  text-transform: uppercase;
  color: ${props => props.exposed ? 'orangered' : 'black'};
`

export default () => {
  const { secretWord, endGame, correctGuesses } = useContext(GameContext);

  const hiddenWord = secretWord.split('').map((char, idx) =>
    correctGuesses.includes(char)
    ? <HiddenLetter key={idx}>{char}</HiddenLetter>
    : endGame ? <HiddenLetter exposed key={idx}>{char}</HiddenLetter>
    :<HiddenLetter key={idx}>_</HiddenLetter>
  );

  return (
    <HiddenWord>
      { hiddenWord }
    </HiddenWord>
  );
}
