import React,{useState } from "react";
import Hooksmouse from "./Hooksmouse";

function MouseContainer() {
    const [display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <Hooksmouse />}
        </div>
    )
}
export default MouseContainer;