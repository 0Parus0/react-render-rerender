
import React from 'react'

const ChildTwo = () => {
  console.log('ChildTwo Render')
  return (
    <div>ChildTwo Component</div>
  )
}

const MemoiseChildTwo =  React.memo(ChildTwo);

export default MemoiseChildTwo;