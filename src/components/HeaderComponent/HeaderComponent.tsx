import React, { FC } from 'react';
import './HeaderComponent.scss'
import { Difficulties } from '../../models/Difficulties';
import DifficultySelectorComponent from '../DifficultySelectorComponent/DifficultySelectorComponent';
import ThemeSwitcherComponent from '../ThemeSwitcherComponent/ThemeSwitcherComponent';

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