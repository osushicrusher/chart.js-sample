// import { myLineChart } from "./myLineChart";
// import { myBarChart } from "./myBarChart";
// import { myPieChart } from "./myPieChart";
// import { myRaderChart } from "./myRaderChart";
// import { myScatterChart } from "./myScatterChart";

// import { POKEMON_ITEMS } from "./pokemon/items.json";
// import { POKEMON_MOVES } from "./pokemon/moves.json";
import { POKEDEX } from "./pokemon/pokedex.json";
// import { POKEMON_TYPES } from "./pokemon/types.json";

const wrapper = document.getElementById("wrapper");
const searchBar = document.getElementById("js-searchBar");
const searchBtn = document.getElementById("js-searchBtn");
const container0 = document.getElementById("container0");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pokemonName = searchBar.value;
  const pokemon = POKEDEX.filter((p) => pokemonName === p.name.japanese)[0];
  const pokemonHTML = createPokemonHTML(pokemon);
  wrapper.innerHTML += pokemonHTML;
  const container1 = document.getElementById("container1");
  container0.classList.add("d-none");
  container1.classList.remove("d-none");
  adjustImgName(pokemon.id);
  console.log(pokemon);
});

/**
 * ポケモン情報からHTMLを作る関数
 * @param  {Object} pokemon 検索バーから取得したポケモン情報
 * @return {str}
 */
function createPokemonHTML(pokemon) {
  const pokemonHTML = `
  <div id="container1" class="container1 d-none">
    <div class="left">
      <div class="details">
        <div>id: ${pokemon.id}</div>
        <div>name: ${pokemon.name.japanese}</div>
        <div>type: ${pokemon.type}</div>
      </div>
      <div class="menus">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
    <div class="right">
      <div class="card">
        <img
          src="./src/pokemon/img/${adjustImgName(pokemon.id)}.png"
          alt="Pokemon"
          class="product-img"
          width="300px"
          height="300px"
        />
      </div>
    </div>
</div>
  `;

  return pokemonHTML;
}

function adjustImgName(pokemonId) {
  return ("000" + pokemonId).slice(-3);
}
