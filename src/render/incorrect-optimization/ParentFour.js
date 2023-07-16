


import React, { useState, useMemo, useCallback } from 'react'
import MemoiseChildFive from './ChildFive';

const ParentFour = ({children, newCount}) => {
    const [count, setCount] = useState(0);
    const [name, setName]  = useState('Parus');

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoisePerson = useMemo(() => person, []);
    
    const handleClick = () => {}
    console.log('ParentFour Render')
    const memoiseHandleClick = useCallback(handleClick, []);
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Raja Yasir')}>Change Name</button>

        {/* Never memoize Child component when parent component has an object or a function in parent component and that object/function is passed as a prop to child */}

        {/*
            Always use useMemo to memoise an object or an array or any other by-reference entity
            and useCallback to memoise the functions
  */}
    
        <MemoiseChildFive  handleClick={memoiseHandleClick} name={name} person={memoisePerson}/>
      
    </div>
  )
}

export default ParentFour;