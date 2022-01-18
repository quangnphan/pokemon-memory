import Pokemon from "./Pokemon"

const PokemonGrid = ({pokemons,handleClick}) => {
    const pokemonItems = pokemons.map((pokemon)=>(
        <Pokemon handleClick={handleClick} key={pokemon.id} pokemon={pokemon}/>
    ))
    return(
        <div className="grid">{pokemonItems}</div>
    )
}

export default PokemonGrid