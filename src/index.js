import { myLineChart } from "./myLineChart";
import { myBarChart } from "./myBarChart";
import { myPieChart } from "./myPieChart";
import { myRaderChart } from "./myRaderChart";
import { myScatterChart } from "./myScatterChart";

import { POKEMON_ITEMS } from "./pokemon/items.json";
import { POKEMON_MOVES } from "./pokemon/moves.json";
import { POKEDEX } from "./pokemon/pokedex.json";
import { POKEMON_TYPES } from "./pokemon/types.json";

const searchBar = document.getElementById("js-searchBar");
const searchBtn = document.getElementById("js-searchBtn");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pokemonName = searchBar.value;
  const pokemon = POKEDEX.filter((p) => pokemonName === p.name.japanese)[0];
  // const pokemonId = pokemon.id;
  // const pokemonType = pokemon.type;
  // const pokemonBase = pokemon.base;
});

/**
 * ポケモン情報からHTMLを作る関数
 * @param  {Object} pokemon 検索バーから取得したポケモン情報
 * @return {div}
 */
function createPokemonHTML(pokemon) {
  const container = document.createElement("div");

  const header = document.createElement("header");

  const main = document.createElement("main");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const menus = document.createElement("div");

  const footer = document.createElement("footer");
}
