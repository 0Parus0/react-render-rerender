import React, { useState } from 'react'

const initialState = ['Bruce', 'Wayne'];

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState);

    const handleClick = () => {

        const newPersons = [...persons]
        newPersons.push('Clark');
        newPersons.push('Kent');

        setPersons(newPersons);

        // bad code 

        // persons.push('clark');
        // persons.push('kent');
        // setPersons(persons);
    };

    console.log('Array useState rendered');


  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map((person) => {
                return <div key={person}>{person}</div>
            })
        }
    </div>
  )
}

export default ArrayUseState;