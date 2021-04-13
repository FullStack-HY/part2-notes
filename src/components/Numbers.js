import React from 'react'

const Numbers = ({ personsToShow }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person => 
                <li key={person.name}>{person.name}, {person.phone}</li>)}
            </ul>
        </>
    )
}

export default Numbers