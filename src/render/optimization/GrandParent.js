import React, { useState } from 'react'
import ParentOne from './ParentOne';
import ChildOne from './ChildOne';

const GrandParent = () => {
    const [newCount, setCount] = useState(0);

    console.log('GrandParent Rerender')
  return (
    <div>
        <button onClick={() => setCount((nc) => nc + 1)}>GrandParent Count {newCount}</button>
        <ParentOne newCount={newCount}>
            <ChildOne />
        </ParentOne>
    </div>
  )
}

export default GrandParent;