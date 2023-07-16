import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}



export const ObjectUseState = () => {

    const [person, setPerson] = useState(initialState);

    const handleChangeName = () => {
        const newPerson = {...person};
        newPerson.fname = 'Clark';
        newPerson.lname = 'Kent';
        setPerson(newPerson);
        // bad code

        // person.fname = 'Clark';
        // person.lname = 'Kent'
        // setPerson(person);
    }

    console.log('ObjectUseState Rendered')

  return (
    <div>
        <h2>{person.fname}-{person.lname}</h2>
        <button onClick={handleChangeName}>Change Name</button>
    </div>
  )
}
