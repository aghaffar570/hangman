import React from 'react';
import styled from 'styled-components';

const HiddenWord = styled.div`
  padding: 5rem 1.5rem;
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

export default ({ secretWord, endGame, correctGuesses }) => {
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
  )
}
