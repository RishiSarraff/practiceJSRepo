import { useState } from "react";

// we use the export const Name = () => { syntax}

// useState is to introduce a changing mutable state of a component that we want to change

export const Counter = () => {
    const [count, setCount] = useState(0); //begins count variable at 0 and creates setCount as a setter for us.
    return(
        <>
        <button onClick = {() => setCount(count + 1)}> Count: {count} </button>
        </> // when we click on button, change the count by +1, thats what onClick is doing.
    )
}