import React from 'react';
import styled from 'styled-components';

const Letter = styled.span`
  margin: 10px;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Mansalva', cursive;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: lightcoral;
  }

  &[disabled] {
    color: ${props => props.wrongChar ? 'red' : 'grey'};
    opacity: ${props => props.wrongChar ? '0.2' : '0.4'};
    pointer-events: none;
    text-decoration: line-through;
  }
`

const LetterBank = styled.div`
  width: 60%;
  height: 50%;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: lavenderblush;
`;

const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Alphabets = ({ guesses, wrongGuesses, updateGuesses }) => {
  return (
    <LetterBank>
      {
        alphabets.map((char, idx) =>
          <Letter
            key={idx}
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

export default Alphabets;
