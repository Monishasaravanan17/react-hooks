import React, { useEffect, useState } from "react";

function HooksTimer() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // dependency method
        // setCount(count + 1) 
        // below setCount function is without dependency method
        setCount(prevCount => prevCount + 1)
    }
    //   single useEffect function
    // 
    // 
    useEffect(() => {
    const interval = setInterval(tick,1000)
    return () => {
    clearInterval(interval)
    }
    },
    // for dependency arr we have to write the variable within the list
    // [count]
    // empty list is without dependency method
    [])
    // 
    // 
    // end of single useEffect


    // multiple useEffect
    // useEffect(() => {
        // function doSomething(){
            // console.log(someProp)
        // }
        // doSomething()
        // const interval = setInterval(tick , 1000)
        // return () => {
            // clearInterval(interval)
        // }
    // },[someProp])

    return (
        <div>
            <h1>{count}</h1>

        </div>
    )
}
export default HooksTimer;