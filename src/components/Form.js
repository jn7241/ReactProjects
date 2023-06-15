const Form =({addPerson, onChange, value})=>{
    return(
    <form onSubmit = {addPerson}>

        <div>
          Name: <input
          value = {value[0]} onChange = {onChange[0]}/>
        </div>
        <br/>
        <div>
          Phone: <input
          value = {value[1]} onChange = {onChange[1]}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>

    </form>
    )
}
export default Form