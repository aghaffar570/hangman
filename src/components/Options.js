import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';

const OptionButton = styled.div`
  position: absolute;
  top: 35px;
  left: 45px;
  z-index: 10;
  outline: none;
  cursor: pointer;
`

const Difficulty = styled.div`
  height: 70%;
  margin: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Mansalva', cursive;
  & > h2 {
    text-transform: uppercase;
  }
  & label {
    font-size: 20px;
    margin-right: 20px;
  }
  & select {
    outline: none;
  }
  & input {
    display: block;
    margin: 2rem auto;
  }
`

export default ({ fetchWord }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [difficultyValue, setDifficultyValue] = useState('1');

  const onSetSidebarOpen = () => setSidebarOpen(!sidebarOpen);

  const handleDifficulty = (ev) => {
    setDifficultyValue(ev.target.value);
  }

  const submitDifficulty = (ev) => {
    ev.preventDefault();
    const query = `difficulty=${difficultyValue}`;
    fetchWord(query);
    onSetSidebarOpen();
  }

  return (
    <Sidebar
      sidebar={
      <Difficulty>
        <h2>options</h2>
        <form onSubmit={submitDifficulty}>
          <label>
            Select your difficulty:
          </label>
          <select value={difficultyValue} onChange={handleDifficulty}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
      </Difficulty>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: {
        zIndex: 5,
        background: 'rgb(252, 252, 252)',
        width: '35%',
      } }}
    >
      <OptionButton title='options' onClick={onSetSidebarOpen}>&#9889;</OptionButton>
    </Sidebar>
  );
}
