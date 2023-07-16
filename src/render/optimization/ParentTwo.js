
import React, { useState } from 'react'
import MemoiseChildTwo from './ChildTwo';

const ParentTwo = ({children, newCount}) => {
    const [count, setCount] = useState(0);
    const [name, setName]  = useState('Parus');
    console.log('ParentTwo Render')
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Raja Yasir')}>Change Name</button>
        <MemoiseChildTwo name={name} />
    </div>
  )
}

export default ParentTwo;