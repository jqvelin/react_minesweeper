import React, { FC } from 'react';
import './GameOutcomeComponent.scss'
import { GameStates } from '../../models/GameStates';

interface GameOutcomeComponentProps {
    gameState: GameStates
    restart: () => void
}

const GameOutcomeComponent: FC<GameOutcomeComponentProps> = ({gameState, restart}) => {
    return (
        <div className="message">
            <h3>{gameState === GameStates.GAME_WON ? 'Вы победили!' : 'Игра окончена:('}</h3>
            <button onClick={restart}>{gameState === GameStates.GAME_WON ? 'Новая игра' : 'Попробовать снова'}</button>
        </div>
    );
};

export default GameOutcomeComponent;