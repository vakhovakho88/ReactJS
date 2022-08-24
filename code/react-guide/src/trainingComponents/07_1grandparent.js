
//import { useState } from "react";
import Parent from "./07_2parent";

import "./07_0deco.css";



const GrandParent = (props) =>{


    return(
        <div>
        <Parent></Parent>
        <form>
            <label>This is a component GrandParent, enter a name</label>
            <br/>
            <input type="Text"></input>
            <button type="submit">Send</button>
        </form>
    </div>
        );
    };
    
    export default GrandParent;