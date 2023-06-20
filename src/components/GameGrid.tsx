import React from 'react'
import Cell from './Cell'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Grid as TSGrid, Cell as TSCell, draw } from './Grid';


const h = 3;
const w = 5;
const sampleGrid = new TSGrid(w, h);

export default function GameGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                sampleGrid.grid.map((item) => {
                    return (
                        <Grid container spacing={2}>
                            {item.map((cell) => {
                                return (
                                    <Grid xs={1}>
                                        <Cell />
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
