import React from 'react';
import styled from "styled-components";
import Container from './Container';

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  position: fixed;

  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #151517;
`

const Menu = styled.ul`
  display: flex;

`

const MenuItem = styled.li`
  margin: 0 20px;
  list-style: none;
`

interface MenuItemTextProps {
  isActive?: boolean;
}

const MenuItemText = styled.a<MenuItemTextProps>`
  margin: 0 20px;
  color: ${({isActive}) => isActive ? '#EEBF63' : '#151517' };
  font-size: 16px;
  transition: 0.3s;
  font-weight: ${({isActive}) => isActive ? 700 : 400 };

  &:hover {
    color: #EEBF63;
  }
`

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo>Caner Karaman</Logo>
        <Menu>
          <MenuItem>
            <MenuItemText isActive href="/">Home</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText href="/about">About</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText href="/project">Project</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText href="/contact">Contact</MenuItemText>
          </MenuItem>
        </Menu>
      </StyledHeader>
    </Container>
  )
}

export default Header;
