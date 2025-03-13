import axios from "axios";
import { isError, isFetching, success } from "../redux/slice/pokemonSlice";

export const fetchPokemon = (e, pokemon) => async (dispatch) => {
  e.preventDefault();
  dispatch(isFetching());
  try {
    let selectedPokemon = pokemon.toLowerCase().trim();
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    dispatch(success(data));
  } catch (error) {
    dispatch(isError());
  }
};
