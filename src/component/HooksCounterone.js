import React,{useState} from "react";
function HookCounterone(){
    const initialCount = 0
    const[count,setCount] = useState(initialCount)
    return(
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>_</button>
            
        </div>
    )
}
export default HookCounterone;
