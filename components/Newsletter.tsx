import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';

const Wrapper = styled.div`
  height: 315px;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  background-color: #EEBF63;
  align-items: center;
  border-radius: 25px;
  margin-bottom: 30px;
`

const Title = styled.h1`
  color: #FFFFFF;
`

const StyledButton = styled(Button)`
  height: 70px;
  min-width: 210px;
  font-size: 24px;
  margin-right: 55px;
`

const TernararyButton = styled(Button)`
  height: 70px;
  font-size: 24px;
  background-color: #EEBF63;
  border-color: #FFF;
`

const NewsLetter = () => {
  return(
    <section>
      <Container>
        <Wrapper>
          <Title>Interested<br/>working<br/>with me?</Title>
          <div>
            <StyledButton buttonTypes="secondary">Email Me</StyledButton>
            <TernararyButton>See More Projects</TernararyButton>
          </div>
        </Wrapper>
      </Container>
    </section>
  )
}

export default NewsLetter;
