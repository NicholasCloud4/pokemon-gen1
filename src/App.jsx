import Header from "./components/Header";
import PokemonInfo from "./components/PokemonInfo";
import pokedex from "./pokedex.json";
import "./App.css";
import Search from "./components/Search";
import { useState } from "react";

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPokedex = pokedex.filter((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(searchQuery.toLowerCase());
  });


  const pokedexMap = filteredPokedex.map((pokemon) => {
    return (
      <PokemonInfo
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name.english}
        type={pokemon.type}
        base={pokemon.base}
      />
    )
  })

  return (
    <>
      <Header />
      <Search onSearch={setSearchQuery} />
      <div className={"pokemon-grid"}>
        {pokedexMap}
      </div>

    </>
  );
}

export default App;
