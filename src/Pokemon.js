const Pokemon = ({pokemon,handleClick}) => {
    return(
        <div className="card" onClick={handleClick}>
            <img src={pokemon.image} alt={pokemon.image}></img>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default Pokemon