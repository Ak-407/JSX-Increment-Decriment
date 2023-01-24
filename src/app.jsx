import React, {useState} from "react";


function app(){
  const [number, increment] = useState(0);


  return <div className="container">
    <h1>{number}</h1>
    <button className="button" onClick={() => increment(number - 1)}>-</button>
    <button className="button" onClick={() => increment(number + 1)}>+</button>
    </div>

}

export default app;