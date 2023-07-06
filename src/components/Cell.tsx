import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { CellState, Cell as TSCell } from './Grid'

interface IPros {
  cell: TSCell;
}



// setTimeout(() => {
//   console.log(`Hello 1`);
//   setTimeout(() => {
//     console.log(`Hello 2`);
//     setTimeout(() => {
//       console.log(`Hello 3`);
//       setTimeout(() => {
//         console.log(`Hello 4`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const sample = new Promise((res, rej)=>{
  setTimeout(() => res(1), 3000);
})

sample.then((result) => {
  console.log(`Finished ${result}`)
  return 2;
})
.then((res)=> console.log(res));



export default function Cell(props: IPros) {

  const [clickCount, setClickCount] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
  switch (props.cell.state) {
    case CellState.Snake: {
      setColor("green");
      break;
    }
    case CellState.Food: {
      setColor("red");
      break;
    }
    case CellState.Border: {
      setColor("blue");
      break;
    }
  }
  }, []);

  const clickHandler = () => {
    props.cell.state = props.cell.state + 1 > 3 ? props.cell.state + 1 : 0 ;
    setClickCount(clickCount+1);
    
    console.log(`hello ${props.cell.x}.${props.cell.y} count=${clickCount+1}`);

  }

  return (
    <div style={{
      width: "100px",
      height: "100px",
      border: "solid",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      backgroundColor: color,
    }}
    onClick={clickHandler}
    >
      {props.cell.x}.{props.cell.y} <br/>
      count = {clickCount}
    </div>
  )
}
