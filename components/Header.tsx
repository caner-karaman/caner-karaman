import React, { FC, useState } from 'react';
import styled from "styled-components";
import breakpoints from '../common/breakpoints';
import Container from './Container';
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  height: 100px;

  align-items: center;
  justify-content: space-between;

  ${breakpoints.device.xl}{
    height: 80px;
  }

  ${breakpoints.device.sm}{
    height: 60px;
  }
`

const Logo = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #151517;
`

const Menu = styled.ul`
  display: flex;

  ${breakpoints.device.sm}{
    display: none;
  }
`

const MenuItem = styled.li`
  margin: 0 20px;
  list-style: none;

  ${breakpoints.device.sm}{
    margin: 0;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #d3d3d3;
  }
`

interface WrapperProps {
  isHome: boolean;
}

const Wrapper = styled.header`
  position: fixed;
  z-index: 999;
  background-color: ${({isHome}) => isHome ? '#f1f1f1' : '#fff'};
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
  cursor: pointer;
  font-weight: ${({isActive}) => isActive ? 700 : 400 };

  &:hover {
    color: #EEBF63;
  }

  ${breakpoints.device.sm}{
    margin: 0 18px;
    width: 100%;
    font-size: 20px;
    padding: 17px 0;
  }
`

const Hamburger = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  ${breakpoints.device.sm}{
    display: block;
    height: 12px;
    width: 20px;
  }
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #000;
  position: absolute;
  transform-origin: top left;
  transition: .3s;
`

interface LineProps{
  isActive?: boolean;
}

const FirstLine = styled(Line)<LineProps>`
  top: 0;
  left: 0;

  rotate: ${({isActive}) => isActive ? 45 : 0}deg;
  /* top: ${({isActive}) => isActive ? 10 : 13}px; */
`
const SecondLine = styled(Line)<LineProps>`
  top: 5px;
  left: 0;

  opacity: ${({isActive}) => isActive ? 0 : 1};
  
`
const ThirdLine = styled(Line)<LineProps>`
  left: 0;
  transform-origin: bottom left;
  
  rotate: ${({isActive}) => isActive ? 315 : 0}deg;
  top: ${({isActive}) => isActive ? 13 : 10}px;
`;

const MenuContent = styled.ul`
  position: fixed;
  background-color: white;
  padding: 0;
  margin: 0 -18px;
  z-index: 9999;
  height: calc(100% - 60px);
  width:100%;
`

interface HeaderProps{
  path: 'home' | 'blogs' | 'projects' | 'contact';
}

const Header: FC<HeaderProps> = ({path}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpen = () => setIsMenuOpened(!isMenuOpened);

  return (
    <Wrapper isHome={path === 'home'}>
      <Container>
        <StyledHeader>
          <Logo>Caner Karaman</Logo>
          <Menu>
            <Link href="/">
              <MenuItem>
                <MenuItemText isActive={path === 'home'}>Home</MenuItemText>
              </MenuItem>
            </Link>
            <Link href="/blogs">
              <MenuItem>
                <MenuItemText isActive={path === 'blogs'}>Blog</MenuItemText>
              </MenuItem>
            </Link>
            {/* 
            <MenuItem>
              <MenuItemText href="/project">Project</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText href="/contact">Contact</MenuItemText>
            </MenuItem> */}
          </Menu>
          <Hamburger onClick={handleMenuOpen}>
            <FirstLine isActive={isMenuOpened}/>
            <SecondLine isActive={isMenuOpened}/>
            <ThirdLine isActive={isMenuOpened}/>
          </Hamburger>
        </StyledHeader>
        {isMenuOpened && 
          <MenuContent>
            <Link href="/">
              <MenuItem>
                <MenuItemText>Home</MenuItemText>
              </MenuItem>
            </Link>
            <Link href="/blogs">
              <MenuItem>
                <MenuItemText>Blog</MenuItemText>
              </MenuItem>
            </Link>
          </MenuContent>
        }
      </Container>
    </Wrapper>
  )
}

export default Header;
