import { useState } from 'react'
import All from './components/All'
import Filter from './components/Filter'
import Form from './components/Form'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhones] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length+1,
      name: newName,
      phone: newPhone
    }
    if (persons.filter(val => JSON.stringify(val.name) === JSON.stringify(personObject.name)).length > 0) 
    { 
      alert(`Choose a different value! ${personObject.name} already in list!`)
      return
    }
    else{
    setPersons(persons.concat(personObject))
    setNewName("")
    setNewPhones("")
    }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
    
  }
  const handlePhoneChange = (event) =>{
    setNewPhones(event.target.value)
  }

  const handleFilterChange = (event)=> {
    setNewFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      Filter by full name (case-insensitive): <input value = {newFilter} onChange = {handleFilterChange}  />
      <Filter filter = {newFilter} persons = {persons}/>
      </div>

      <h2>Add a New Person</h2>
      <Form addPerson ={addPerson} 
      onChange = {[handleNameChange, handlePhoneChange]} 
      value = {[newName, newPhone]} />
      <h2>Numbers</h2>
      <All persons = {persons}/>
    </div>
  )
}

export default App