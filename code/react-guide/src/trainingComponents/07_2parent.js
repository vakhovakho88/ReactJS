
//import { useState } from "react";
import Child from "./07_3child";

const Parent = (props) =>{


    return(
        <div>
        <Child></Child>
        <form>
            <label>This is a component Parent, enter a name</label>
            <br/>
            <input type="Text"></input>
            <button type="submit">Send</button>
        
        </form>
    </div>
        );
    };
    
    export default Parent;