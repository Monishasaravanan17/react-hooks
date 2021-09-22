// simple state by using UseReducer
import React,{useReducer} from "react";
const initialState=0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReduceCounter() {
   const[count,dispatch] =  useReducer(reducer,initialState)
    return(
        <div>
            <button>{count}</button>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
        </div>
    )
}
export default ReduceCounter;