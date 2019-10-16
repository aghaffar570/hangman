import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './GameContext';

const Letter = styled.span`
  margin: 10px;
  font-size: 26px;
  font-weight: 500;
  font-family: 'Mansalva', cursive;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: ${props => props.endGame ? 'none' : 'auto'};

  &:hover {
    color: lightcoral;
  }

  &[disabled] {
    color: ${props => props.wrongChar ? 'red' : 'grey'};
    opacity: ${props => props.wrongChar ? '0.3' : '0.4'};
    pointer-events: none;
    text-decoration: line-through;
  }
`

const LetterBank = styled.div`
  position: relative;
  width: 60%;
  height: 50%;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: lavenderblush;
  z-index: 5;
`;

const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default () => {
  const { guesses, wrongGuesses, updateGuesses, endGame } = useContext(GameContext)
  return (
    <LetterBank>
      {
        alphabets.map((char, idx) =>
          <Letter
            key={idx}
            endGame={endGame}
            disabled={guesses.includes(char)}
            wrongChar={wrongGuesses.includes(char)}
            onClick={() => updateGuesses(char)}
          >
            {char}
          </Letter>
      )}
    </LetterBank>
  );
}

