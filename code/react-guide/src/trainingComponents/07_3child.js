import { useState } from "react";
import GrandChild from "./07_4grandChild";
const Child = (props) => {


    //let us create a state that receives a value from the cild component after subtition of this child componen
    const [childName, setChildName] = useState('test');
    return (
        <div>
            <GrandChild setChildNameForParent={setChildName}></GrandChild>
            <form>
                <label>This is a component Child, enter a name {childName}</label>
                <br/>
                <input type="Text"></input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Child;