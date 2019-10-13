import React, { useState, useEffect } from 'react';
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

const HiddenWord = styled(LetterBank)`
  flex-wrap: nowrap;
`

const HiddenLetter = styled.span`
  width: 100%;
  margin: 20px;
  font-size: 36px;
  font-weight: 400;
  font-family: sans-serif;
  text-transform: uppercase;
  color: black;
`;


const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

const App = () => {
  const [secretWord, setSecretWord] = useState('linkedin');
  const [guessCount, setGuessCount] = useState(6);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  useEffect(() => {
    // make api call to http://app.linkedin-reach.io/words
  })


  const hiddenWord = secretWord.split('').map((char, idx) =>
      correctGuesses.includes(char)
      ? <HiddenLetter key={idx}>{char}</HiddenLetter>
      : <HiddenLetter key={idx}>_</HiddenLetter>
  )

  const updateGuesses = (char) => {

    if(secretWord.includes(char)) {
      setCorrectGuesses([...correctGuesses, char])
    } else {
      setWrongGuesses([...wrongGuesses, char])
      setGuessCount(guessCount - 1)
    }

    setGuesses([...guesses, char])
  }

  console.log({guessCount, correctGuesses, wrongGuesses, guesses})
  return (
    <div className='App'>
      <GameTitle>Hangman</GameTitle>
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
      <HiddenWord>
        { hiddenWord }
      </HiddenWord>
    </div>
  );
}

export default App;
