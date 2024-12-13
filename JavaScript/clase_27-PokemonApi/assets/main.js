import { fecthPokemons } from "./request.js";

const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

const appState = {
  currentUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=8",
  isFetching: false,
};

const getPokemonsData = async () => {
  const { next, results } = await fecthPokemons(appState.currentUrl);
  appState.currentUrl = next;

  const pokemonDataUrls = results.map((pokemon) => pokemon.url);

  const pokemonsData = await Promise.all(
    pokemonDataUrls.map(async (url) => {
      const nextPokemonsData = await fetch(url);
      return await nextPokemonsData.json();
    })
  );
  return pokemonsData;
};

const pokemonTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
    experience: pokemon.base_experience,
  };
};

const createTypeCard = (types) => {
  return types
    .map((tipo) => {
      return `<div class="${tipo.type.name} tipo-poke">${tipo.type.name}</div>`;
    })
    .join("");
};

const createPokemonCard = (pokemon) => {
  const { id, name, image, height, weight, experience, types } =
    pokemonTemplate(pokemon);
  console.log(types);
  return `
        <div class="poke">
          <img
            src="${image}"
          />
          <h2>${name}</h2>
          <span class="exp">EXP: ${experience}</span>
          ${createTypeCard(types)}
          <p class="id-poke">#${id}</p>
          <p class="height">Height: ${height}m</p>
          <p class="weight">Weight: ${weight}Kg</p>
        </div>
    `;
};

const renderPokemonList = (pokemonsList) => {
  pokemonsContainer.innerHTML += pokemonsList
    .map((pokemon) => createPokemonCard(pokemon))
    .join("");
};

const loadAndRenderPokemons = async (renderingPokemons) => {
  const pokemonsData = await getPokemonsData();
  renderingPokemons(pokemonsData);
};

const isEndOfPage = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  const isBottom = scrollTop + clientHeight >= scrollHeight - 2;
  return isBottom;
};

const renderOnScroll = (pokemonList) => {
  loader.classList.toggle("show");
  setTimeout(() => {
    loader.classList.toggle("show");
    renderPokemonList(pokemonList);
    appState.isFetching = false;
  }, 1500);
};

const loadNextPokemons = async () => {
  if (!appState.isFetching && isEndOfPage()) {
    appState.isFetching = true;
    loadAndRenderPokemons(renderOnScroll);
  }
};

function init() {
  window.addEventListener(
    "DOMContentLoaded",
    async () => await loadAndRenderPokemons(renderPokemonList)
  );
  window.addEventListener("scroll", async () => await loadNextPokemons());
}
init();
