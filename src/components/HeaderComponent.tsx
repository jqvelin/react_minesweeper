import React, { ChangeEvent, FC } from 'react';
import { Difficulties } from '../models/Difficulties';
import DifficultySelectorComponent from './DifficultySelectorComponent';
import ThemeSwitcherComponent from './ThemeSwitcherComponent';

interface HeaderComponentProps {
    difficulty: Difficulties
    setDifficulty: (nextDifficulty: Difficulties) => void
}

const HeaderComponent: FC<HeaderComponentProps> = ({difficulty, setDifficulty}) => {

    return (
        <header>
            <div className="row">
            <DifficultySelectorComponent difficulty={difficulty} setDifficulty={setDifficulty}/>
            <ThemeSwitcherComponent />
            </div>
            <h1>MINESWEEPER</h1>
        </header>
    );
};

export default HeaderComponent;