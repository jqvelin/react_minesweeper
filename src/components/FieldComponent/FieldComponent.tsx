import React, { FC } from 'react';
import './FieldComponent.scss'
import { Field } from '../../models/Field';
import CellComponent from '../CellComponent/CellComponent';
import { GameStates } from '../../models/GameStates';

interface FieldComponentProps {
    field: Field
    setField: (nextField: Field) => void
    gameState: GameStates
    setGameState: (nextGameState: GameStates) => void
}

const FieldComponent: FC<FieldComponentProps> = ({field, setField, gameState, setGameState}) => {

    function updateField(){
        const fieldCopy = field.getFieldCopy()
        setField(fieldCopy)
    }

    return (
        <div className={['field', gameState === GameStates.GAME_WON ? 'victory' : ''].join(' ')} onContextMenu={e => e.preventDefault()}>
            {field.cells.map(
                (row, index) => <div className="row" key={index}>
                        {row.map(cell => 
                            <CellComponent cell={(gameState === GameStates.GAME_LOST || gameState === GameStates.GAME_WON) ? cell.reveal() : cell} updateField={updateField} setGameState={setGameState} key={cell.y === 0 ? cell.x : Number(`${cell.y}${cell.x}`)}/>
                        )}
                </div>    
            )}
        </div>
    );
};

export default FieldComponent;