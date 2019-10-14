import React, { useState, useEffect } from 'react';
import Alphabets from './components/Alphabets';
import HiddenWord from './components/HiddenWord';
import styled from 'styled-components';


const GameTitle = styled.h1`
  font-family: 'Mansalva', cursive;
  text-transform: uppercase;
  text-align: center;
`

const RestartButton = styled.button`
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
`

const ImageChicks = styled.img`
  transform: scaleX(-1);
  display: block;
  margin: 2.5rem auto;
  padding: 0 60px;
`

const App = () => {
  const [secretWord, setSecretWord] = useState('linkedin');
  const [guessCount, setGuessCount] = useState(6);
  const [winGame, setWinGame] = useState(new Set(secretWord.split('')));
  const [endGame, setEndGame] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  useEffect(() => {
    fetchWord()
  }, []);

  const fetchWord = () => {
    fetch('/api/words')
      .then(res => res.json())
      .then(({ wordList, length }) => {
        const randomWord = wordList[Math.floor(Math.random() * length)];
        setSecretWord(randomWord);
        setWinGame(new Set(randomWord.split('')));
      })
      .catch(console.error)
  }

  const restartGame = () => {
    setGuessCount(6);
    setEndGame(false);
    setWrongGuesses([]);
    setCorrectGuesses([]);
    setGuesses([]);

    fetchWord()
  }

  const updateGuesses = (char) => {

    if (secretWord.includes(char)) {
      winGame.delete(char);
      setCorrectGuesses([...correctGuesses, char]);
      if (winGame.size === 0) setEndGame(true);
    } else {
      setWrongGuesses([...wrongGuesses, char]);
      guessCount === 1 && setEndGame(true) || setGuessCount(guessCount - 1);
    }

    setGuesses([...guesses, char]);
  }

  console.log({secretWord, guessCount, correctGuesses, wrongGuesses, guesses, winGame, endGame})
  return (
    <div className='App'>
      <GameTitle>Hangman</GameTitle>
      <Alphabets
        guesses={guesses}
        wrongGuesses={wrongGuesses}
        updateGuesses={updateGuesses}
        endGame={endGame}
        />
      <HiddenWord
        endGame={endGame}
        secretWord={secretWord}
        correctGuesses={correctGuesses}
      />
      { endGame ? <RestartButton onClick={restartGame}>play again</RestartButton> : null }
      <ImageChicks src="https://www.animatedimages.org/data/media/532/animated-chicken-image-0079.gif" border="0" alt="free-animated-chicken-image-from-animatedimages.org"/>
    </div>
  );
}

export default App;
