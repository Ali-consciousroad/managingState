import React, { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  // useState() hook 
  // Read-only state: Destructure the current state value fruits from the returned array
  const [fruits] = useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
        {fruitName: 'raspberry', id: 4},
  ]);
  
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits myFruits={fruits}/>
      <FruitsCounter myFruits={fruits} />
    </div>
  );
}

export default App;
