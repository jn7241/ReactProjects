import Person from './Person'
const All = ({persons}) =>{
    return(
    <ul>
          {persons.map(person =>
            <Person key = {person.id} person = {person}/>
            )}
    </ul>
    )
}

export default All