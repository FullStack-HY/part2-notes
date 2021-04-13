import React, { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import AddNew from './components/AddNew'
import Numbers from './components/Numbers'

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
      <SearchFilter filterText={filterText} filterChangeHandler={filterChangeHandler}/>
      <AddNew
        submitHandler={submitHandler}
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newPhone={newPhone}
        phoneChangeHandler={phoneChangeHandler}
      />
      <Numbers
        personsToShow={personsToShow}
      />
    </div>
  )
}

export default App