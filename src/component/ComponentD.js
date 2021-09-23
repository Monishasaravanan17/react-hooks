import React, { useContext } from "react";
import {CountContext} from '../App'

function ComponentD(){
    const countContext = useContext(CountContext)
    return(
        <div>
            ComponentD
            <button>{countContext.countState}</button>
            <button onClick={() => countContext.countDispatch('increment')}>+</button>
            <button onClick={() =>countContext.countDispatch('decrement')}>-</button>
            <button onClick={() =>countContext.countDispatch('reset')}>RESET</button>
        </div>
    )
}
export default ComponentD ;
