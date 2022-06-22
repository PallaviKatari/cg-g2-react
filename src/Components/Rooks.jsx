import React from "react";
//npm install --save rooks
import { useOnline, usePreviousImmediate } from "rooks";
import {useState, useEffect} from "react"

export default function Rooks() {
    const online = useOnline();
    console.log("I'm online");
  
    return (
      <div>
        <h4>Rooks: useOnline example</h4>  
        <hr></hr>
        <div style={{ backgroundColor: "lightblue" }}>
          Status:You are {online ? "Online" : "Offline"}
        </div>
        <hr>
        </hr>
        <Example/>
        <Example1/>
      </div>
    );
  }

function Example() {
    const [value, setValue] = useState(0);
     const lastValue = usePreviousImmediate(value);
   
     return (
       <div className="App">
         <h4>Rooks : usePrevious Example</h4>
         <p>
           Current: {value} - Previous: {lastValue}
         </p>
         <button onClick={() => setValue(value + 1)}>Increment</button>
       </div>
     );
   }

   function Example1() {
    const [count, setCount] = useState(0);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }