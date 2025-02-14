import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyles'
import {categories} from '../../data/Categories.js'
import Categoria from './Categoria.jsx'

const Categorias = () => {
  return (
    <CategoriasWrapper>
        <h2>Categorias</h2>
        <CategoriasContainer>
            {
                categories.map((categoria) => {
                    return <Categoria key={categoria.id} {...categoria}/>
                })
            }
        </CategoriasContainer>
    </CategoriasWrapper>
  )
}

export default Categorias