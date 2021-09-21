import React, { useState, useEffect } from "react";
function HookCounterfour() {
    const [Count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${Count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(Count + 1)}>click {Count}times</button>
        </div>
    )
}
export default HookCounterfour;