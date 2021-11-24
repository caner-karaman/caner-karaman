import React from 'react'
import styled from 'styled-components';
import Container from './Container';

const StyledFooter = styled.footer`
  background-color:   #486074;
`

const FooterContent = styled.div`
  display: flex;
  height: 164px;
  align-items: center;
`

const Title = styled.h2`
  color: #fff;
`

const Footer = () => {
  return(
    <StyledFooter>
      <Container>
        <FooterContent>
          <Title>Let's Connect</Title>
        </FooterContent>
      </Container>
    </StyledFooter>
  )
}

export default Footer;
