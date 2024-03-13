import React, { useEffect, useState } from 'react';
import './sass/App.scss'
import { Field } from './models/Field';
import { Difficulties } from './models/Difficulties';
import FieldComponent from './components/FieldComponent';
import { GameStates } from './models/GameStates';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import IntroductionComponent from './components/IntroductionComponent';
import GameOutcomeComponent from './components/GameOutcomeComponent';

const App = () => {
  const [gameState, setGameState] = useState<GameStates>(GameStates.INTRODUCTION)
  const [difficulty, setDifficulty] = useState<Difficulties>(Difficulties.BEGINNER)
  const [field, setField] = useState<Field>(new Field(difficulty))

  useEffect(() => restart(), [difficulty])

  function restart(){
    const nextField = new Field(difficulty)
    nextField.initCells()
    nextField.initMines()
    nextField.initCellsEnvironment()
    setField(nextField)
    gameState !== GameStates.INTRODUCTION && setGameState(GameStates.GAME_RUNNING)
  }

  return (
    <>
      <HeaderComponent difficulty={difficulty} setDifficulty={setDifficulty}/>
      {gameState === GameStates.INTRODUCTION && <IntroductionComponent difficulty={difficulty} setDifficulty={setDifficulty} setGameState={setGameState}/>}
      {(gameState === GameStates.GAME_RUNNING || gameState === GameStates.GAME_LOST || gameState === GameStates.GAME_WON) && <FieldComponent field={field} setField={setField} gameState={gameState} setGameState={setGameState}/>}
      {(gameState === GameStates.GAME_LOST || gameState === GameStates.GAME_WON) && <GameOutcomeComponent gameState={gameState} restart={restart}/>}
      <FooterComponent />
    </>
  );
};

export default App;