import React, { useState } from 'react';
import styled from 'styled-components';


const GameTitle = styled.h1`
  font-family: 'Mansalva', cursive;
  text-transform: uppercase;
  text-align: center;
`

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
    color: grey;
    opacity: 0.4;
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

const App = () => {
  const [guesses, setGuesses] = useState([]);

  return (
    <div className='App'>
      <GameTitle>Hangman</GameTitle>
      <LetterBank>
        {
          alphabets.map((char, idx) =>
            <Letter
              key={idx}
              disabled={guesses.includes(char)}
              onClick={() => setGuesses([...guesses, char])}
            >
              {char}
            </Letter>
        )}
      </LetterBank>
    </div>
  );
}

export default App;
