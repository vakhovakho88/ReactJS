//form submition
//A form to submit a persons name and surname

import { useState } from "react";

// But hardcoded values
const NewPerson = () => {



    //states for the values, empty states for the begining
    const [newName,setNewName] = useState("");
    const [newSurName,setNewSurName] = useState("");
    


    //an eventhandler that occurs when we change value of the textbox
    const nameChangedEventhandler = (event)=>{
        setNewName(event.target.value);
        //console.log(newName);
    }
    const surNameChangedEventhandler = (event)=>{
        setNewSurName(event.target.value);
        //console.log(newSurName);
    }


    //this is an eventhandler, that will be called after we submit our form
    const submitHandler = (event) =>{
        //to prevent the default bevaviour to reload the page after submition
        event.preventDefault();

        //assign a values from states
        const newPersonObject = {
            name: newName,
            surname: newSurName
        };
        
        console.log(newPersonObject);
    }


    return (

        <form onSubmit={submitHandler}>
            <label>name</label>
            <input type="text" onChange={nameChangedEventhandler} value={newName}/>
            <label>surname</label>
            <input type="text" onChange={surNameChangedEventhandler} value={newSurName}/>
            <button type="submit">Add Person</button>
        </form>
    );
};

export default NewPerson;


// onChange={nameChangedEventhandler}    -> it will be called when we edit a text
// event.target.value    -> the value of a trigger of the event
// value={newSurName}    ->       we achieve two side Bindings with it
