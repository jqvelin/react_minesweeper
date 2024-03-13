import { Cell } from "./Cell";
import { Difficulties } from "./Difficulties";

export class Field {
    cells: Cell[][] = []
    difficulty: Difficulties
    width: number
    height: number
    minesQty: number = 0
    safeCellsQty: number = 0
    constructor(difficulty: Difficulties){
        this.difficulty = difficulty
        switch (this.difficulty){
            case Difficulties.BEGINNER:
                this.minesQty = 10
                break;
            case Difficulties.INTERMEDIATE:
                this.minesQty = 40
                break;
            case Difficulties.EXPERT:
                this.minesQty = 99
                break;
        }
        this.width = parseInt(this.difficulty.split('x')[0])
        this.height = parseInt(this.difficulty.split('x')[1])
    }

    initCells(){
        for (let y = 0; y < this.height; y++){
            const row: Cell[] = []
            for (let x = 0; x < this.width; x++){
                row.push(new Cell(this, x, y))
            }
            this.cells.push(row)
        }
    }

    initMines(){
        
        for (let mineNum = 0; mineNum < this.minesQty; mineNum++){
            let randomXPos, randomYPos
            do {
                randomXPos = Math.floor(Math.random() * this.width)
                randomYPos = Math.floor(Math.random() * this.height)
            } while (this.getCell(randomXPos, randomYPos).hasMine)
            this.getCell(randomXPos, randomYPos).hasMine = true
        }
    }

    initCellsEnvironment(){
        for (let y = 0; y < this.height; y++){
            for (let x = 0; x < this.width; x++){
                const cell = this.getCell(x, y)
                cell.checkEnvironment()
            }
        }
    }

    getCell(x: number, y: number): Cell{
        return this.cells[y][x]
    }

    getFieldCopy(){
        const fieldCopy = new Field(this.difficulty)
        fieldCopy.cells = this.cells
        return fieldCopy
    }
}