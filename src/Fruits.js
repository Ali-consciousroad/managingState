// Create a functional component named Fruits that accepts a prop called myFruits.
function Fruits({myFruits}) {
    // Map over all the fruits of the fruits array and return the fruitName value for each fruit. 
    // const fruitNameItem = myFruits.map(f => <p key={f.id}>{f.fruitName}</p>)
    // Test
    // console.log(fruitNameItem); 
    return (
        <div>
            {/*{fruitNameItem}*/}
            {myFruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits