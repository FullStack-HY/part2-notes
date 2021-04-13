import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1,
      name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const nameHandler = (event) => {
    event.preventDefault()
    //check if name is in phonebook
    let names = persons.map(person => person.name)
    console.log(names);
    if (names.includes(newName)){
      window.alert(`${newName} is already added`)
    } else {
        let nameSubmit = {
          id: persons.length + 1,
          name: newName
        }
        setPersons(persons.concat(nameSubmit))
        setNewName('')
    }
  }

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={nameHandler}>
        <div>
          name:
          <input value={newName} onChange={nameChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App