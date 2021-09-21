import React, { useState, useEffect } from "react";
function HookCounterfive() {
    const [Count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `you clicked ${Count} times`
    },[Count])

    return (
        <div>
            <input type = "text" value={name} onChange = {e => setName(e.target.value)}/>
            <button onClick={() => setCount(Count + 1)}>click {Count}times</button>
        </div>
    )
}
export default HookCounterfive;