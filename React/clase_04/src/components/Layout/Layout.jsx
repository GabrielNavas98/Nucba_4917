import React from 'react'
import { LayoutWrapepr } from './LayoutStyles'

const Layout = ({children}) => {
  return (
    <LayoutWrapepr>
        {children}
    </LayoutWrapepr>
  )
}

export default Layout