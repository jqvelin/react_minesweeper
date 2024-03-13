import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { GameStates } from '../models/GameStates';

interface CellComponentProps {
    cell: Cell
    updateField: () => void
    setGameState: (nextGameState: GameStates) => void
}

const CellComponent: FC<CellComponentProps> = ({cell, updateField, setGameState}) => {
    function handleReveal(e: React.PointerEvent){
        console.log(cell.flagged)
        const initialTiming = Date.now()
        e.target.addEventListener('pointerup', checkTiming)
        function checkTiming(){
            const finishingTiming = Date.now()
            if (finishingTiming - initialTiming > 400 || e.button === 2){
                handleFlag(e)
            } else if (!cell.flagged && !cell.revealed){
                cell.reveal()
                if (cell.hasMine) {
                    setGameState(GameStates.GAME_LOST)
                } else if (cell.field.minesQty + cell.field.safeCellsQty === cell.field.width * cell.field.height){
                    setGameState(GameStates.GAME_WON)
                }
            }
            e.target.removeEventListener('pointerup', checkTiming)
            updateField()   
        }
    }

    function handleFlag(e: React.PointerEvent){
        if (cell.revealed) return
        e.preventDefault()
        cell.flagged = !cell.flagged
        updateField()
    }

    return (
        <div className={['cell', cell.revealed  ? 'revealed' : ''].join(' ')} onPointerDown={e => handleReveal(e)}>
            {cell.flagged ? <div className="flag"></div> : (cell.revealed && (cell.hasMine ? <div className="mine"></div> : (cell.minesNearby || '')))}
        </div>
    );
};

export default CellComponent;