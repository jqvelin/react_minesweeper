import { Field } from "./Field"

export class Cell {
    field: Field
    x: number
    y: number
    hasMine: boolean = false
    minesNearby: number = 0
    revealed: boolean = false
    flagged: boolean = false

    constructor(field: Field, x: number, y: number){
        this.field = field
        this.x = x
        this.y = y
    }

    checkEnvironment(){
        for (let y = this.y - 1; y <= this.y + 1; y++){
            for (let x = this.x - 1; x <= this.x + 1; x++){
                if (x < 0 || x === this.field.width || y < 0 || y === this.field.height || this === this.field.getCell(x, y)) continue
                const cell = this.field.getCell(x, y)
                cell.hasMine && this.minesNearby++
            }
        }
    }

    reveal(){
            if (!this.flagged){
                this.revealed = true
                this.field.safeCellsQty++
                if (this.minesNearby === 0) {
                    for (let y = this.y - 1; y <= this.y + 1; y++){
                        for (let x = this.x - 1; x <= this.x + 1; x++){
                            if (x < 0 || x === this.field.width || y < 0 || y === this.field.height) continue 
                            const cell = this.field.getCell(x, y)
                            if (this === cell || cell.revealed) continue
                            cell.reveal()
                        }
                    }
                }
            }
        return this
    }
}