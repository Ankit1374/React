import {useReducer} from 'react';
const initialState=0;
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return 0;
    }

};

function Hooks() {

   const[data,dispatch]= useReducer(reducer, initialState);

  return <div>
     <h2>Value is= {data}</h2>
<button onClick={()=>dispatch({type:"increment"})}>+</button>
<button onClick={()=>dispatch({type:"decrement"})}>-</button>
<button onClick={()=>dispatch({type:"reset"})}>Reset</button>

  </div>;
}

export default Hooks;