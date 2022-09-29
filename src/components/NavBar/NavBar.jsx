import React, {useState} from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, CarShoppin } from "./NavBar.elements";
import '../NavBar/NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import {IconContext} from 'react-icons';
import { FaBars, FaAddressBook, FaShoppingCart, FaPalette, FaLayerGroup, FaHome, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";



function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)


  return (
    <Container>
      <Wrapper>
          <IconContext.Provider value={{style: {fontSize: '2em'}}}>
        <LogoContainer>
          <CartWidget/>
        </LogoContainer>
            <MobileIcon onClick={()=> setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars/>}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem>
          <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
          <div>
            <FaHome/>
            <Link to='/'>
            Home
            </Link>
          </div>
          </MenuItemLink>
          <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
          <div>
            <FaPalette/>
            <Link to='/category/boxAniversario'>
              Arreglos Aniversario
            </Link>
          </div>
          </MenuItemLink>
          <MenuItemLink  onClick={()=> setShowMobileMenu(!showMobileMenu)}>
          <div>
            <FaLayerGroup/>
            <Link to='/category/boxCumpleaños'>
            Arreglos de Cumplaeños
            </Link>
          </div>
          </MenuItemLink>
          <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
          <div>
            <FaAddressBook/>
            Contactanos
          </div>
          </MenuItemLink>
          </MenuItem>
        </Menu>
        <CarShoppin>
            <FaShoppingCart/>
          </CarShoppin>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}

export default NavBar