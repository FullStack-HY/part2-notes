import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      phone: '666-666-666'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterText, setNewFilter ] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    //check if name is in phonebook
    let names = persons.map(person => person.name)
    console.log(names);
    if (names.includes(newName)){
      window.alert(`${newName} is already added`)
    } else {
        let nameSubmit = {
          name: newName,
          phone: newPhone
        }
        setPersons(persons.concat(nameSubmit))
        setNewName('')
        setNewPhone('')
    }
  }

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const phoneChangeHandler = (event) => {
    setNewPhone(event.target.value)
  }

  const personsToShow = filterText.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(filterText))
    : persons

  const filterChangeHandler = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with:
        <input value={filterText} onChange={filterChangeHandler}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={submitHandler}>
        <div>name:
          <input value={newName} onChange={nameChangeHandler}/>
        </div>
        <div>number:
          <input value={newPhone} onChange={phoneChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
        <li key={person.name}>{person.name}, {person.phone}</li>)}
      </ul>
    </div>
  )
}

export default App