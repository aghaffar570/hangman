import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Alphabets from './components/Alphabets';
import GameHeader from './components/GameHeader';
import HiddenWord from './components/HiddenWord';


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

const EndStatement = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Mansalva', cursive;
`


const App = () => {
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


  console.log({secretWord, guessCount, correctGuesses, wrongGuesses, guesses, winGame, endGame})
  return (
    <div className='App'>
      <GameHeader
        guessCount={guessCount}
        userScore={userScore}
      />
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
      { endGame && winGame.size === 0 && <EndStatement>Great Job!</EndStatement> }
      { endGame && winGame.size !== 0 && <EndStatement>Sorry, try again!</EndStatement> }
      { endGame ? <RestartButton onClick={restartGame}>play again</RestartButton> : null }
      <ImageChicks src="https://www.animatedimages.org/data/media/532/animated-chicken-image-0079.gif" border="0" alt="free-animated-chicken-image-from-animatedimages.org"/>
    </div>
  );
}

export default App;
