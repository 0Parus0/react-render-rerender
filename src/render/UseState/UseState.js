import { useState } from "react"

function UseState() {
    const [count, setCount] = useState(0);

    console.log('UseState Render');
  return (
    <div>
        <button  onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
        <button  onClick={() => setCount((c) => 0)}>reset to 0</button>
        <button  onClick={() => setCount((c) => c = 5 )}>Count to 5</button>
    </div>
  )
}

export default UseState