import { CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

export interface Fact{
    text: string;
    date: string;
}

interface IProps {
    fact: Fact;
}

export default function Fact(props: IProps) {
    console.log(props.fact.date);
  return (
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.fact.text}
      </Typography>
      <input type="datetime-local" value={"2017-06-01T08:30"}/>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
  )
}
