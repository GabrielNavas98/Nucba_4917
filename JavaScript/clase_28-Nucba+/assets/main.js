import { fetchMovies, TOPRATED, TRENDING, UPCOMING } from "./request.js";

const cardContainer = document.querySelector(".cards-container");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
const pageNumber = document.querySelector(".page-number");
const filtersContainer = document.querySelector(".filter-container");
const filterButtons = document.querySelectorAll(".btn");
const imgBaseUrl = "https://image.tmdb.org/t/p/original";

const appState = {
  page: null,
  total: null,
  searchParam: TRENDING,
};

const renderLoader = () => {
  return `
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    `;
};

const togglePrevBtn = (page) => {
  if (page === 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
};

const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
};

const setPaginationSate = () => {
  pageNumber.innerHTML = appState.page;
  togglePrevBtn(appState.page);
  toggleNextBtn(appState.page, appState.total);
};

const createCardTemplate = (movie) => {
  const { title, poster_path, vote_average, release_date } = movie;
  return `
    <div class="card">
        <img
          loading="lazy"
          src=${
            poster_path
              ? imgBaseUrl + poster_path
              : "./assets/img/placeholder.png"
          }
          alt="pelicula"
          class="card-img"
        />
        <div class="card-popularity">${formatVoteAverage(
          vote_average
        )}% de popularidad</div>
        <div class="card-content">
          <h2>${title}</h2>
          <p>Fecha de estreno: ${formatDate(release_date)}</p>
        </div>
      </div>
    `;
};

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
};

const formatVoteAverage = (voteAverage) => {
  return Math.floor(voteAverage * 10);
};

const renderCards = (movies) => {
  cardContainer.innerHTML = movies
    .map((movie) => createCardTemplate(movie))
    .join("");
};

const showMovies = async () => {
  cardContainer.innerHTML = renderLoader();
  const { results, total_pages, page } = await fetchMovies(
    appState.searchParam
  );
  appState.page = page;
  appState.total = total_pages;
  setPaginationSate();
  renderCards(results);
};

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies.results);
  }, 1500);
};

const changePage = async () => {
  cardContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParam, appState.page);
  setPaginationSate();
  loadAndShow(movies);
};

const nextPage = () => {
  if (appState.page === appState.total) return;
  appState.page += 1;
  changePage();
};

const prevPage = () => {
  if (appState.page === 1) return;
  appState.page -= 1;
  changePage();
};

const isActiveCategoryBtn = (btn) => {
  return (
    btn.classList.contains("btn") && !btn.classList.contains("btn--active")
  );
};

const parameterSelector = (filterType) => {
  return filterType === "TOPRATED"
    ? TOPRATED
    : filterType === "UPCOMING"
    ? UPCOMING
    : TRENDING;
};

const setActiveBtn = (selectedParam) => {
  //   console.log(filterButtons);
  const buttons = [...filterButtons];
  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selectedParam) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active");
    }
  });
};

const changeSearchParameter = (e) => {
  if (!isActiveCategoryBtn(e.target)) return;
  const selectedParam = e.target.dataset.filter;
  appState.searchParam = parameterSelector(selectedParam);
  setActiveBtn(selectedParam);
  showMovies();
};

const init = () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBtn.addEventListener("click", nextPage);
  prevBtn.addEventListener("click", prevPage);
  filtersContainer.addEventListener("click", changeSearchParameter);
};
init();
