import React from 'react'
import {motion} from 'framer-motion'

import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavStyled } from './NavbarStyles'


import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#">
                <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" alt="logo" />
            </a>
        </div>

        <LinksContainerStyled>

            <HomeContainerStyled>
                <motion.div whileTap={{scale: 0.95}}>
                    <a href="/#">
                        <LinkContainerStyled home>
                            <HiHome/>
                        </LinkContainerStyled>
                        Home
                    </a>
                </motion.div>
            </HomeContainerStyled>


            <UserNavStyled>
                <UserContainerStyled>
                    <SpanStyled>
                    Inicia sesión
                    </SpanStyled>
                    <FaUserAlt />
                </UserContainerStyled>
            </UserNavStyled>

            <motion.div whileTap={{scale: 0.95}}>
                <MenuContainerStyled>
                    <HiMenu/>
                </MenuContainerStyled>

            </motion.div>

        </LinksContainerStyled>

    </NavbarContainerStyled>
  )
}

export default Navbar