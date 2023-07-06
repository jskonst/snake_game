import React from 'react'
import Cell from './Cell'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Grid as TSGrid, Cell as TSCell, draw, CellState } from './Grid';


const h = 3;
const w = 5;
const sampleGrid = new TSGrid(w, h);
sampleGrid.grid[1][2].state = CellState.Snake;
sampleGrid.grid[1][3].state = CellState.Snake;
sampleGrid.grid[1][4].state = CellState.Snake;

sampleGrid.grid[0][1].state = CellState.Food;
sampleGrid.grid[2][1].state = CellState.Border;

export default function GameGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                sampleGrid.grid.map((item, idx) => {
                    return (
                        <Grid container spacing={1} key={idx}>
                            {item.map((cell) => {
                                return (
                                    <Grid xs={1} key={`grd${cell.x}${cell.y}`}>
                                        <Cell cell={cell} key={`${cell.x}${cell.y}`}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                })
            }
        </Box>
    )
}
