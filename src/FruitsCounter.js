// Create a functional component named FruitsCounter that accepts a prop called myFruits.
function FruitsCounter({ myFruits}) {
    return (
        <h2>Total fruits: { myFruits.length }</h2>
    )
}

export default FruitsCounter;