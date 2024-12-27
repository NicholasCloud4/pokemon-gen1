import Header from "./components/Header";
import PokemonInfo from "./components/PokemonInfo";
import pokedex from "./pokedex.json";
import "./App.css";
import Search from "./components/Search";

function App() {
  //console.log(pokedex);

  const pokedexMap = pokedex.map((pokemon) => {
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
      <Search />
      <div className={"pokemon-grid"}>
        {pokedexMap}
      </div>

    </>
  );
}

export default App;
