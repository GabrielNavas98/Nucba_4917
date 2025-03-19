import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route
} from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/Products/Products'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Counter from '../components/Counter/Counter'
import { CountContextProvider } from '../context/CountContext'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <CountContextProvider>
          <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productID' element={<ProductDetail />} />
            <Route path='/count' element={<Counter />} />
            <Route path='*' element={<h2 style={{ color: 'cadetblue' }}>No hay nada aqui</h2>} />
          </ReactDomRoutes>
        </CountContextProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes