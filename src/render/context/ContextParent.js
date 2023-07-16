import React, { useState } from 'react'
import { ChildA, MemoiseChildA } from './ContextChildren'

export const CountContext = React.createContext()

const CountProvider =  CountContext.Provider;

const ContextParent = ({children}) => {
  const [count, setCount] = useState(0);
  console.log('ContextParent render');
  return (
    <>
        <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
        <CountProvider value={count}>
            {/* Always use memoised immidiate child in context provider */}
            {/* <MemoiseChildA /> */}
            {children}
        </CountProvider>

    </>
  )
}

export default ContextParent;