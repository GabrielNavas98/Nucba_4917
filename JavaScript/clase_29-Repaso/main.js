const baseUrl = "https://rickandmortyapi.com/api/character"; //endopint incorrecto

const characterContainer = document.getElementById("characters");
const loading = document.getElementById("loading");
const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.getElementById("closeModal");
const nextBtn = document.getElementById("nextBtn");

// const baseUrl = "https://rickandmortyapi.com/api/characters"; //endopint incorrecto
// fetch(baseUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.error) {
//       console.log("No hay nada aca");
//     } else {
//       console.log(data);
//     }
//   })
//   .catch((error) => console.log(error));

const appState = {
  nextPage: baseUrl,
};

async function fetchCharacteres() {
  try {
    characterContainer.innerHTML = "";
    loading.style.display = "block";
    const response = await fetch(appState.nextPage);
    const { info, results } = await response.json();
    appState.nextPage = info.next;
    setTimeout(() => {
      displayCharacters(results);
      loading.style.display = "none";
    }, 1500);
  } catch (error) {
    console.error("Error fetching data:", error);
    characterContainer.innerHTML =
      "<p>Error cargando personajes, porfa intenta mas tarde</p>";
  }
}

const displayCharacters = (characters) => {
  characters.forEach((character) => {
    const { image, name, status, species } = character;
    const characterCard = document.createElement("div");
    characterCard.classList = "character-card";

    characterCard.innerHTML = `
        <img src=${image} alt=${name}/>
        <h3>${name}</h3>
        <p>Status: ${status}</p>
        <p>Specie: ${species}</p>
    `;

    characterCard.addEventListener("click", () => {
      openModal(character);
    });

    characterContainer.appendChild(characterCard);
  });
};

const openModal = (character) => {
  modalDetails.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
        <p><strong>Status:</strong> ${character.status}</p>
        <p><strong>Species:</strong> ${character.species}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Origin:</strong> ${character.origin.name}</p>
        <p><strong>Location:</strong> ${character.location.name}</p>
    `;
  modal.style.display = "block";
};

const init = () => {
  fetchCharacteres();
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  nextBtn.addEventListener("click", () => {
    fetchCharacteres();
  });
};
init();
