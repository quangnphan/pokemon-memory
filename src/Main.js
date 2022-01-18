import React, { useState, useEffect } from "react";

import PokemonGrid from "./PokemonGrid";
import ScoreBoard from "./ScoreBoard";
const Main = () => {
  const pokemon_amount = 12;
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsClicked, setPokemonsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shuffle(await fetchPokemons(pokemon_amount)));
    };
    loadCards();
  }, []);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const fetchPokemons = async (amount) => {
    const pokemons = [];
    for (let i = 1; i <= amount; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }
    return pokemons;
  };

  const handleClick = (e) => {
      const pokemonName = e.target.parentNode.lastChild.textContent
      game(pokemonName)
      setPokemons(shuffle(pokemons))
  }

  const game = (name) => {
    if(pokemonsClicked.includes(name)){
        reset()
    }else{
        const newScore = score + 1
        if(newScore > bestScore) setBestScore(newScore)
        setScore(newScore)
        setPokemonsClicked((prevState)=>[...prevState,name])
    }
  }

  const reset = () => {
      setPokemonsClicked([])
      setScore(0)
  }

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <PokemonGrid handleClick={handleClick} pokemons={pokemons} />
    </>
  );
};
export default Main;
