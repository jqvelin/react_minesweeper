import React, { FC } from 'react';
import './DifficultySelectorComponent.scss'
import { Difficulties } from '../../models/Difficulties';

interface DifficultySelectorComponentProps {
    difficulty: Difficulties
    setDifficulty: (nextDifficulty: Difficulties) => void
}

const DifficultySelectorComponent: FC<DifficultySelectorComponentProps> = ({difficulty, setDifficulty}) => {
    function handleChangeDifficulty(e: React.ChangeEvent){
        const target = e.target as HTMLSelectElement
        if (!target) return
        setDifficulty(target.value as Difficulties)
    }
    
    return (
        <select value={difficulty} onChange={e => handleChangeDifficulty(e)}>
                <option value={Difficulties.BEGINNER}>{Difficulties.BEGINNER}</option>
                <option value={Difficulties.INTERMEDIATE}>{Difficulties.INTERMEDIATE}</option>
                <option value={Difficulties.EXPERT}>{Difficulties.EXPERT}</option>
        </select>
    );
};

export default DifficultySelectorComponent;