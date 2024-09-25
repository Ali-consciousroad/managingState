function Fruits(props) {
    // Map over all the fruits of the fruits array and return the fruitName value for each fruit. 
    const fruitNameItem = props.myFruits.map(f => <p key={f.id}>{f.fruitName}</p>)
    console.log(fruitNameItem); 
    return (
        <div>
            {fruitNameItem}
        </div>
    )
}

export default Fruits