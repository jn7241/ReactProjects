import Person from './Person'
const Filter = ({filter, persons}) =>{
    return(
    <>
    <h4>Filtered values:</h4>
    <ul>
      {persons.filter(val => (val.name).toUpperCase() === filter.toUpperCase())
      .map(person => <Person key = {person.id} person = {person}/>)}
    </ul>
    </>
    )
  }

export default Filter