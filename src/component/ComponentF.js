import React, { useContext } from "react";
import {CountContext} from '../App'

function ComponentF(){
    const countContext = useContext(CountContext)
    return(
        <div>
            ComponentF
            <button>{countContext.countState}</button>
            <button onClick={() => countContext.countDispatch('increment')}>+</button>
            <button onClick={() =>countContext.countDispatch('decrement')}>-</button>
            <button onClick={() =>countContext.countDispatch('reset')}>RESET</button>
        </div>
    )
}
export default ComponentF ;
