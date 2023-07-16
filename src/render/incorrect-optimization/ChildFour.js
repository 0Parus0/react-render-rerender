import React from 'react'

const ChildFour = ({name}) => {
  const date = new Date();
  console.log('ChildFour Render');
  return (
    <div>
      Hello { name }. Its currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  )
}


export default React.memo(ChildFour);