import React, { useEffect, useState } from 'react'
import Fact from './Fact';


const GetFacts = async (): Promise<any> => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await res.json();
    return data;
}

export default function Facts() {
    const [facts, setFacts] = useState<Array<any>>([])

    useEffect(() => {
        (async () => {
            const data = await GetFacts();
            setFacts(data);
        })()
    }, [])

  return (
    <div>
      <h1>Hello Cats</h1>
      {
        facts.map((fact:any)=> {
            return (
                <Fact key={fact._id} fact={{text: fact.text, date: fact.createdAt}}/>
            )
        })
      }
    </div>
  )
}
