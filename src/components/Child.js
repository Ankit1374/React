import React, {useContext} from "react";

import {RootContext} from '../App';

function Child()
{
    const data = useContext(RootContext);
    return(
        <div className="App">

        
        <p>Your Token Id is {data.number}</p>
        <p>{data.text}</p>
        <p><button onClick ={data.func }>A button</button></p>


        </div>
    )
}

export default Child