import React, { FC } from 'react';
import styled from "styled-components";
import Container from './Container';

const StyledHeader = styled.header`
  display: flex;
  height: 100px;

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

const Wrapper = styled.header`
  position: fixed;
  z-index: 999;
  background-color: #f1f1f1;
  width: 100%;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
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

interface HeaderProps{
  path: 'home' | 'blogs' | 'projects' | 'contact';
}

const Header: FC<HeaderProps> = ({path}) => {
  return (
    <Wrapper>
      <Container>
        <StyledHeader>
          <Logo>Caner Karaman</Logo>
          <Menu>
            <MenuItem>
              <MenuItemText isActive={path === 'home'} href="/">Home</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText isActive={path === 'blogs'} href="/blogs">Blog</MenuItemText>
            </MenuItem>
            {/* 
            <MenuItem>
              <MenuItemText href="/project">Project</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText href="/contact">Contact</MenuItemText>
            </MenuItem> */}
          </Menu>
        </StyledHeader>
      </Container>
    </Wrapper>
  )
}

export default Header;
