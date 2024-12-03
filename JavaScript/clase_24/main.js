// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data.sprites.back_default); //imagen
//     return console.log(
//       `Hola soy ${data.name} mi tipo es ${data.types[0].type.name}`
//     );
//   })
//   .catch((err) => console.log(err));

//Async/await

// const getPikachu = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//   const data = await response.json();
//   // console.log(data);
//   // console.log(`${data.name} es de tipo ${data.types[0].type.name}`);
//   return data;
// };

//Try catch
const getPikachu = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );
    const data = await response.json();
    // console.log(data);
    // console.log(`${data.name} es de tipo ${data.types[0].type.name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// getPikachu();
const contendor = document.querySelector(".contenedor");

const templatePokemon = (pokemon) => {
  // console.log(pokemon);
  const { name, sprites, types } = pokemon;
  const pokemonHtml = `
    <div class="card">
      <img src="${sprites.front_shiny}" alt="${name}">
      <h2>${name}</h2>
      <p>${types[0].type.name}</p>
    </div>
  `;
  contendor.innerHTML = pokemonHtml;
};

const renderPokemon = async () => {
  try {
    const pokemon = await getPikachu();
    templatePokemon(pokemon);
  } catch (error) {
    console.log(error);
  }
};

renderPokemon();
