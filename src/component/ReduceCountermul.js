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
function ReduceCountermul() {
   const[count,dispatch] =  useReducer(reducer,initialState)
   const[counttwo,dispatchTwo] = useReducer(reducer,initialState)
    return(
        <div>
            <div>
            <button>counter one{count}</button>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
            </div>
            <div>
            <button>counter two{counttwo}</button>
            <button onClick={() => dispatchTwo('increment')}>+</button>
            <button onClick={() => dispatchTwo('decrement')}>-</button>
            <button onClick={() => dispatchTwo('reset')}>RESET</button>
            </div>
            
        </div>

    )
}
export default ReduceCountermul;