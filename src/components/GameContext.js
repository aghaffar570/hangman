import React, { useState, useEffect, createContext } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    /* background: blue; */
  }
`

export const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  const [secretWord, setSecretWord] = useState('linkedin');
  const [guessCount, setGuessCount] = useState(6);
  const [winGame, setWinGame] = useState(new Set(secretWord.split('')));
  const [endGame, setEndGame] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  useEffect(() => {
    localStorage.setItem('score', `${0}`);
    fetchWord()
  }, []);

  const fetchWord = (query='') => {
    fetch(`/api/words?${query}`)
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

    fetchWord();
  }

  const updateGuesses = (char) => {

    if (secretWord.includes(char)) {
      winGame.delete(char);
      setCorrectGuesses([...correctGuesses, char]);
      if (winGame.size === 0) {
        const score = JSON.parse(localStorage.getItem('score'))
        localStorage.setItem('score', `${score + 1}`)
        setUserScore(score + 1);
        setEndGame(true);
      }
    } else {
      setWrongGuesses([...wrongGuesses, char]);
      guessCount === 1 && setEndGame(true) || setGuessCount(guessCount - 1);
    }

    setGuesses([...guesses, char]);
  }

  const value = {
    secretWord,
    guessCount,
    userScore,
    guesses,
    correctGuesses,
    wrongGuesses,
    endGame,
    winGame,
    fetchWord,
    updateGuesses,
    restartGame
  }

  return (
    <GameContext.Provider value={value}>
      <GlobalStyles />
      { children }
    </GameContext.Provider>
  );
}

export default GameContextProvider;
