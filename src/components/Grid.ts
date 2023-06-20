import { ListItem } from "@mui/material";

interface IDisplayable {
    display(): void;
}

export class Grid implements IDisplayable{
    grid: Cell[][];
    constructor(width: number, height: number) {
        this.grid = [];
        for (let row = 0; row < height; row++) {
            this.grid.push([]);
            for (let col = 0; col < width; col++) {
                this.grid[row].push(new Cell(col, row));
            }
        }
    }
    display(): void {
        for (let row of this.grid){
            let rowStr = ""
            for (let item of row) {
                rowStr += `${item.x}.${item.y} `;
            }
            console.log(rowStr)
        }
        
    }
}

export class Cell implements IDisplayable{
    x: number = 0;
    y: number = 0;
    constructor(xCord: number, yCord: number) {
        this.x = xCord;
        this.y = yCord;
    }
    display() {
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
}

export function draw(element: IDisplayable) {
    element.display();
}