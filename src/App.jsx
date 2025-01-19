import Header from "./components/Header";
import PokemonInfo from "./components/PokemonInfo";
import pokedex from "./pokedex.json";
import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import FilterButton from "./components/FilterButton";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredPokedex = pokedex.filter((pokemon) => {
    const matchesSearch = pokemon.name.english.toLowerCase().startsWith(searchQuery.toLowerCase());
    const matchesType = selectedType ? pokemon.type.includes(selectedType) : true;
    return matchesSearch && matchesType;
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
      <FilterButton onTypeSelect={setSelectedType} />
      <Search onSearch={setSearchQuery} />
      <div className={"pokemon-grid"}>
        {pokedexMap}
      </div>

    </>
  );
}

export default App;
