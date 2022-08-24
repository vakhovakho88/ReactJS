import './03_person.css';
import { useState } from 'react';

//person with Button that changes the name of the person
const Person = (props) =>{
    const [name, setName] = useState(props.name)
    const [surname, setSurname] = useState(props.surname)
    return(
        <div className='person_component_div'>
            <h1>Hello My name is {name} and surname is {surname}</h1>
            <button onClick={()=>{setName("Changed a name")}}>change a name</button>
            <button onClick={()=>{setSurname("changed a surname")}}>change a surname</button>
        </div>
    );
}

export default Person;



// <button onClick={()=>{console.log("You Clicked me")}}>change a name</button>