import React from "react";
//import { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  //Lift the state up from the Fruit component
  const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
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
