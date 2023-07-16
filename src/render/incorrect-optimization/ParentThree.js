

import React, { useState } from 'react'
import MemoiseChildFour from './ChildFour';

const ParentThree = ({children, newCount}) => {
    const [count, setCount] = useState(0);
    const [name, setName]  = useState('Parus');
    console.log('ParentFour Render')
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Raja Yasir')}>Change Name</button>
        {/* in react props.children is always a new reference which will cause memoize-child to re-render */}
        <MemoiseChildFour name={name}>
            <p>Hello</p>
        </MemoiseChildFour>
    </div>
  )
}

export default ParentThree;