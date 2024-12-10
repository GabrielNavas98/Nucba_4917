const key = "4d20f49afb684167aebb3605d0c3ec49";
// https://api.rawg.io/api/games?key=4d20f49afb684167aebb3605d0c3ec49

export const requestGame = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}`);
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// requestGame();

// RequestGame con then y catch
// export const requestGame = async () => {
//   return fetch(`https://api.rawg.io/api/games?key=${key}`)
//     .then((response) => response.json())
//     .then((data) => data.results)
//     .catch((error) => console.log(error));
// };
