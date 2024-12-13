import { requestGame } from "./request.js";

const cardsContainer = document.querySelector(".cards-container");
const loader = document.querySelector(".loading-container");

const createTemplateGame = (game) => {
  const { name, rating, background_image } = game;
  return `
    <div class="game-card">
      <img
        src="${background_image}"
        alt=${name}
        class="game-image"
      />
      <div class="game-info">
        <h3 class="game-title">${name}</h3>
        <p class="game-rating">⭐ Rating: ${rating}</p>
       </div>
    </div>
  `;
};

const renderGames = (games) => {
  cardsContainer.innerHTML = games
    .map((game) => createTemplateGame(game))
    .join("");
};

const showLoading = () => {
  loader.style.display = "block";
};

const hideLoading = () => {
  loader.style.display = "none";
};

const getGames = async () => {
  try {
    showLoading();
    const games = await requestGame();
    // console.log(games);
    renderGames(games);
    hideLoading();
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  getGames();
};
init();
