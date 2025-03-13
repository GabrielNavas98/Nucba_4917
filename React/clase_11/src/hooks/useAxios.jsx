import axios from 'axios';
import { initialPokemon } from "../data/initialPokemon";
import { useState } from 'react'

export const useAxios = () => {
    const [data, setData] = useState(initialPokemon);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
  
    const handleSubmit = async (e, pokemon) => {
      e.preventDefault()
      
      setData(null)
      setIsLoading(true)
      setError(false)
  
      try {
        let selectedPokemon = pokemon.toLowerCase().trim()
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        setData(data)     
      } catch (error) {
        setError('Pokemon no encontrado, intenta de nuevo!')
      }
      setIsLoading(false)
    }

    return {
        error,
        data,
        isLoading,
        handleSubmit
    }
}
