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
const ballBox = document.getElementById("ballBox");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pokemonName = searchBar.value;
  const pokemon = POKEDEX.filter((p) => pokemonName === p.name.japanese)[0];
  const pokemonHTML = createPokemonHTML(pokemon);
  wrapper.innerHTML += pokemonHTML;

  const container1 = document.getElementById("container1");

  const menu = document.getElementById("menu");
  const modal = document.getElementById("modal");
  menu.addEventListener("click", function () {
    modal.classList.remove("d-none");
    console.log(document.body);
  });

  container0.classList.add("d-none");
  ballBox.classList.add("d-none");
  container1.classList.remove("d-none");
  adjustImgName(pokemon.id);
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
      <div id="menu" class="menu">
        強さを見る
      </div>
    </div>
    <div class="right">
      <div class="card">
        <img
          src="./src/pokemon/img/${adjustImgName(pokemon.id)}.png"
          alt="Pokemon"
          class="product-img"
          width="250px"
          height="250px"
        />
      </div>
    </div>
</div>
  `;

  return pokemonHTML;
}

// ポケモン画像用
function adjustImgName(pokemonId) {
  return ("000" + pokemonId).slice(-3);
}
