import { useState } from "react";

const GrandChild = (props) => {

    //state that stores a value of the name
    const [grandchildsName, setGrandchildsName] = useState("");


    //this is a method to change a valiue of a state with an input of input field
    const nameChangedEventhandler =  (event) =>{
        setGrandchildsName(event.target.value)
    };


    const submitHandler = (event) => {
        event.preventDefault();
        props.setChildNameForParent("Test changed");
        console.log(grandchildsName);

    };




    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>This is a component GrandChild, enter a name</label>
                <br />
                <input type="Text" onChange={nameChangedEventhandler} value={grandchildsName}></input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default GrandChild;

// throug this we achieve two side binding
//<input type="Text" onChange={nameChangedEventhandler} value={grandchildsName}></input>

