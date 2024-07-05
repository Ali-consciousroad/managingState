function Fruits(props) {
    return (
        <div>
            {props.myFruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits