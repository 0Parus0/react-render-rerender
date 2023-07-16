import React, { useContext } from "react"
import { CountContext } from "./ContextParent"

export  const  ChildA = () => {
    console.log('ChildA render')
  return (
    <>
      <div>ChildA</div>
      <ChildB />
      </>
  )
}

export    const MemoiseChildA = React.memo(ChildA);

export  const ChildB = () => {
    console.log('ChildB render')
    return (
        <>
        <div>
            ChildB
        </div>
        <ChildC />
        </>
    )
}

export const ChildC = () => {
    console.log('ChildC render')
    const count = useContext(CountContext);
    return (
        <>
            <div>Child C Count {count}</div>
        </>
    )
}