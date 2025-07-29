import React, { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  // We lifted up the state from the Fruits component to the App component so the state can be shared with the child components.
  // useState() hook 
  // Read-only state: Destructure the current state value fruits from the returned array
  // The state is read-only, so we only destructure the first element, not the second element setFruits.
  const [fruits, setFruits] = useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'lemon', id: 2},
        {fruitName: 'plum', id: 3},
        {fruitName: 'raspberry', id: 4},
  ]);

  // V2. 
  // Function to add a new fruit 
  /*
  const  addFruit = () => {   
    setFruits([...fruits, {fruitName: 'pear', id: fruits.length +1}]);
  };
  */

  // V3. 
  // Function that asks the user for a fruit name and adds it to the fruits array
  const addFruit = () => {
    const fruitName = prompt("Enter a fruit name:");
    if (fruitName) {
      setFruits([...fruits, { fruitName, id: fruits.length + 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits myFruits={fruits}/>
      <FruitsCounter myFruits={fruits} />
      <button onClick={addFruit}>Add a fruit</button>
    </div>
  );
}

export default App;
