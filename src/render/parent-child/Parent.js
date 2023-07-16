import { useReducer, useState } from "react";
import Child from "./Child";

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialState;  
        default: return state;
    }
}

function Parent() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initialState);

    console.log('Parent Render');
  return (
    <div>
        <Child />
        <p>{count}</p>
        <button  onClick={() => dispatch('increment')}>Increment</button>
        <button  onClick={() => dispatch('reset')}>reset to 0</button>
        <button  onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default Parent;