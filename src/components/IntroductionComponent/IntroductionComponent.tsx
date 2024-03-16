import React, { FC, useEffect, useRef } from 'react';
import './IntroductionComponent.scss'
import { GameStates } from '../../models/GameStates';
import { Difficulties } from '../../models/Difficulties';
import logo from '../../assets/logo.png'

interface IntroductionComponentProps{
    difficulty: Difficulties
    setDifficulty: (nextDifficulty: Difficulties) => void
    setGameState: (nextState: GameStates) => void
}

const IntroductionComponent: FC<IntroductionComponentProps> = ({difficulty, setDifficulty, setGameState}) => {
    const animatableLogo = useRef<HTMLDivElement>(null)
    const guide = useRef<HTMLDivElement>(null)
    useEffect(() => {
        animatableLogo.current?.classList.add('slide')
        guide.current?.classList.add('appear')
    }, [])
    return (
        <div className="modal">
            <div className="modal-content">

                <div className="logo-container" ref={animatableLogo}>
                    <img src={logo} className="logo"/>
                    <h2>MINESWEEPER</h2>
                </div>

                <div className="tips" ref={guide}>
                <div className="row tip">
                        <div className="field">
                            <div className="row">
                                <div className="cell revealed"></div>
                                <div data-type="1" className="cell revealed">1</div>
                                <div className="cell revealed"></div>
                            </div>
                            <div className="row">
                                <div data-type="2" className="cell revealed">2</div>
                                <div className="cell revealed"></div>
                                <div className="cell revealed"><div className="mine"></div></div>
                            </div>
                            <div className="row">
                                <div className="cell revealed"><div className="mine"></div></div>
                                <div className="cell revealed"><div className="mine"></div></div>
                                <div className="cell revealed"></div>
                            </div>
                            </div>
                            <p>Цифра на клетке показывает, сколько мин находится вокруг неё</p>
                        </div>

                        <div className="row tip">
                            <div className="field">
                                <div className="row">
                                    <div data-type="1" className="cell revealed">1</div>
                                    <div className="cell"><div className="flag"></div></div>
                                    <div data-type="3" className="cell revealed">3</div>
                                </div>
                                <div className="row">
                                    <div data-type="1" className="cell revealed">1</div>
                                    <div data-type="2" className="cell revealed">2</div>
                                    <div className="cell"><div className="flag"></div></div>
                                </div>
                                <div className="row">
                                    <div className="cell revealed"></div>
                                    <div data-type="2" className="cell revealed">2</div>
                                    <div data-type="1" className="cell revealed">1</div>
                                </div>
                            </div>
                        <p>Отметьте все заминированные клетки флажками!</p>
                        </div>  
                </div>
                <button onClick={() => setGameState(GameStates.GAME_RUNNING)}>Начать игру</button> 
            </div>
        </div>
    );
};

export default IntroductionComponent;